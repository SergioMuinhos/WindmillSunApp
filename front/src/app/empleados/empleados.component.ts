import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { ModalService } from '../clientes/detalle/modal.service';
import { URL_BACKEND } from '../config/config';
import { AuthService } from '../usuarios/auth.service';
import { Usuario } from '../usuarios/usuario';
import { UsuarioService } from '../usuarios/usuario.service';
import { UsuarioRol } from '../usuarios/usuarioRol';

import swal from 'sweetalert2';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html'
})
export class EmpleadosComponent implements OnInit {

  usuarios:UsuarioRol[];
  paginador:any;
  usuarioSeleccionado:UsuarioRol;
  urlBackend:string=URL_BACKEND;
  public usuario:Usuario=new Usuario();

  constructor(
    private userService: UsuarioService,
    public modalService: ModalService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let page: number = +params.get('page');

      if (!page) {
        page = 0;
      }

      this.userService.getUsuariosPage(page).pipe(
        tap(response => {
          (response.content as Usuario[]).forEach(usuario => usuario.nombre)
        })
      ).subscribe(response => {
        this.usuarios = response.content as UsuarioRol[]
        this.paginador = response;
      });
    }
    );
    this.modalService._notificarUpload.subscribe(user=>{
      this.usuarios=this.usuarios.map(userOriginal=>{
        if(user.id==userOriginal.id){
          userOriginal.id=user.id;
        }
        return userOriginal;
      })
    })
    var usuarioSession= JSON.parse(sessionStorage.getItem('usuario'));

    if (Array.isArray(this.usuarios)) {
    const filteredUsers=this.usuarios.filter((user)=>user.username!==usuarioSession.username);
    console.log("USUARIOS:"+filteredUsers);}else{
      console.log("AUN NO")
    }

  }
  abrirModal(user: UsuarioRol) {
    //this.userSeleccionado = user;
    this.modalService.abrirModal();
  }
  
  delete(user:UsuarioRol):void{
    swal.fire({
      title: 'Esta Seguro?',
      text: `¿Seguro que desea eliminar al cliente ${user.nombre} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.delete(user.id).subscribe(
          () => {
            this.usuarios = this.usuarios.filter(cli => cli !== user)
            swal.fire(
              'Eliminado!',
              `Cliente ${user.nombre} eliminado con exito.`,
              'success')
          }
        )

      }
    })
  }



}
