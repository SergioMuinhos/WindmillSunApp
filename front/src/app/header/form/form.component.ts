import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/clientes/detalle/modal.service';
import { URL_BACKEND } from 'src/app/config/config';
import { AuthService } from 'src/app/usuarios/auth.service';
import { Usuario } from 'src/app/usuarios/usuario';

@Component({
  selector: 'header-profile',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormUsuariosComponent implements OnInit {
  urlBackend: string = URL_BACKEND;
  titulo: string = "Perfil de Usuario";
  public usuario:Usuario=new Usuario();
  public errores: string[];

  constructor(  public modalService: ModalService,
    public authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.usuario= JSON.parse(sessionStorage.getItem('usuario'));
    console.log("Usuario Logueado: "+ this.usuario.username);
  }


  cerrarModal(){
    this.modalService.cerrarModal();
  }
}
