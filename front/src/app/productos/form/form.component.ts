import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/clientes/detalle/modal.service';
import { URL_BACKEND } from 'src/app/config/config';
import { Producto } from 'src/app/facturas/models/producto';
import { AuthService } from 'src/app/usuarios/auth.service';
import { ProductoService } from '../producto.service';

import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'form-productos',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormProductosComponent implements OnInit {

  urlBackend: string = URL_BACKEND;
  titulo: string = "Crear Producto";
  public producto:Producto=new Producto();
  public errores: string[];

  constructor(
    private productoService:ProductoService,
    public modalService: ModalService,
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cerrarModal() {
    this.modalService.cerrarModal();

  }
  create(){
    this.productoService.create(this.producto).subscribe(
      json => {
        console.log(json)
        swal.fire('Nuevo Producto', `${json.mensaje}: ${json.producto.nombre} creado correctamente`, 'success')
        this.router.navigate(['/productos'])
        this.cerrarModal();
      },
      err => {
        this.errores = err.error.errors as string[];
        console.error(err.error.errors);
        console.error('Codigo error desde el backend: ' + err.status);
      }
    );
    
  }

}
