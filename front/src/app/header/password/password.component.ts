import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/clientes/detalle/modal.service';
import { AuthService } from 'src/app/usuarios/auth.service';
import { Usuario } from 'src/app/usuarios/usuario';
import { UsuarioService } from 'src/app/usuarios/usuario.service';
import { ChangePass } from './changePass';
import swal from 'sweetalert2';
import { UsuarioRol } from 'src/app/usuarios/usuarioRol';




@Component({
  selector: 'header-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  form: FormGroup;
  titulo: string = "Cambio de Contraseña";
  public usuario: Usuario = new Usuario();
  public errores: string[];

  oldPassword = '';
  newPasswrd = '';
  newPasswrd2 = '';
  password2: string = '';
  @ViewChild('passwordForm') passwordForm: NgForm;

  constructor(public modalService: ModalService,
    private router: Router,
    private userService: UsuarioService,
    public authService: AuthService, private fb: FormBuilder) {
  }

  ngOnInit(): void {

  }

  cerrarModal() {
    this.passwordForm.resetForm();
    this.modalService.cerrarModal();
  }

  cambiarPassword() {
    var usuarioSession = JSON.parse(sessionStorage.getItem('usuario'));
    const formData = this.passwordForm.value;
    let pass: ChangePass = new ChangePass(formData.oldPassword, formData.newPasswrd);
    this.userService.changePassword(pass, usuarioSession.username).subscribe(
      json => {
       // console.log(json)
        this.passwordForm.resetForm();
        this.router.navigate(['/clientes'])
        swal.fire('Cambio de Contraseña', `${json.mensaje}: Contraseña cambiada correctamente`, 'success')
      },
      err => {
        this.errores = err.error.errors as string[];
        console.error(err.error.errors);
        console.error('Codigo error desde el backend: ' + err.status);
        swal.fire('Cambio de Contraseña', `${err.error}: Contraseña NO cambiada`, 'error')
      }
    );

  }

}
