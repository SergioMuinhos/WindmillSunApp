import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from 'src/app/usuarios/rol';
import { Usuario } from 'src/app/usuarios/usuario';
import { UsuarioService } from 'src/app/usuarios/usuario.service';
import { UsuarioRol } from 'src/app/usuarios/usuarioRol';

import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class UserFormComponent implements OnInit {

  public usuario: UsuarioRol=new UsuarioRol();
  public roles:Rol[];
  public funcion="Crear";
  public errores:string[];
  private usuarios:Usuario[];

  constructor(private usuarioService:UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   this.cargarRoles();
   this.cargarUsuarios();
  }
  create():void{
    var rol= new Rol();
    rol=this.usuario.roles[0];
    this.usuario.roles=new Array(2);
    if(this.checkUsername(this.usuario.username)){
      swal.fire('Username ya en uso ', 'El username ya esta cogido, por favor cambielo por otro', 'warning')
    }else{
      if(!this.usuario.password){
        this.usuario.password='vacio';
      }
    this.usuarioService.createUsuario(this.usuario).subscribe(
      json=>{
        console.log(json)
        this.router.navigate(['/empleados']);
        swal.fire('Nuevo Usuario', `${json.mensaje}: ${json.usuario.nombre} creado correctamente`, 'success')
      }
    )}
  }

  cargarRoles():void{
    this.usuarioService.getRoles().subscribe(roles=>this.roles=roles);
  }
  cargarUsuarios(){
    this.usuarioService.getUsuarios().subscribe(usuarios=>this.usuarios=usuarios);
  }

  checkUsername(username:string){
    if(this.usuarios.some(e=>e.username=== username)){
      return true;
    }
     return false;
  }

}
