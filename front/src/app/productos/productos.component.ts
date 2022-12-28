import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { ClienteService } from '../clientes/cliente.service';
import { ModalService } from '../clientes/detalle/modal.service';
import { URL_BACKEND } from '../config/config';
import { Producto } from '../facturas/models/producto';
import { AuthService } from '../usuarios/auth.service';

import swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductoComponent  {
private urlEndPoint: string = URL_BACKEND+'/api/productos';
productos:Producto[];
producto= new Producto();
paginador: any;
habilitar: boolean =false;
public errores: string[];

constructor(private http: HttpClient,
  private clienteService: ClienteService,
  private router: Router,
  public modalService: ModalService,
  private activatedRoute: ActivatedRoute,
  public authService: AuthService) { }

    displayStyle = "none";

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      let page: number = +params.get('page');

      if (!page) {
        page = 0;
      }

      this.getProductos(page).pipe(
        tap(response => {
          (response.content as Producto[]).forEach(producto => console.log(producto.nombre))
        })
      ).subscribe(response => {
        this.productos = response.content as Producto[]
        this.paginador = response;
      });
    }
    );


  }


setHabilitar():void{
this.habilitar=!this.habilitar;
this.habilitar?this.displayStyle = "block":this.displayStyle ='none';
}

createProducto(){
  if(this.producto.precio==0){
    this.producto.precio=0;
  }
  this.clienteService.createProducto(this.producto).subscribe(
    json => {
      console.log(json)
      swal.fire('Nuevo Producto', `${json.mensaje}: ${json.producto.nombre} creado correctamente`, 'success');
      this.router.navigate(['/productos'])
    },
    err => {
      this.errores = err.error.errors as string[];
      console.error(err.error.errors);
      console.error('Codigo error desde el backend: ' + err.status);
    }
  );
  this.displayStyle ='none';
  
}

abrirModal() {
    this.modalService.abrirModal();
}



getProductos(page: number): Observable<any> {
  return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
    tap((response: any) => {
      (response.content as Producto[]).forEach(producto => {
      });
    }),
    map((response: any) => {
      (response.content as Producto[]).map(producto => {
        producto.nombre = producto.nombre.toUpperCase();
        return producto;
      });
      return response;
    }),
    tap(response => {
      (response.content as Producto[]).forEach(producto => {
       // console.log(cliente.nombre)
      })
    })
  )
}

delete(producto:Producto){
  
}
}

