import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service'
import { ModalService } from './detalle/modal.service';
import swal from 'sweetalert2';
import { tap } from 'rxjs/operators';
import { AuthService } from '../usuarios/auth.service';
import { URL_BACKEND } from '../config/config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  paginador: any;
  clienteSeleccionado: Cliente;
  urlBackend:string =URL_BACKEND;

  constructor(private clienteService: ClienteService,
    public modalService: ModalService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    public authService: AuthService) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      let page: number = +params.get('page');

      if (!page) {
        page = 0;
      }

      this.clienteService.getClientes(page).pipe(
        tap(response => {
          (response.content as Cliente[]).forEach(cliente =>cliente) /*console.log()cliente.nombre))*/
        })
      ).subscribe(response => {
        this.clientes = response.content as Cliente[]
        this.paginador = response;
      });
    }
    );
    this.modalService._notificarUpload.subscribe(cliente=>{
      this.clientes=this.clientes.map(clienteOriginal=>{
        if(cliente.id==clienteOriginal.id){
          clienteOriginal.foto=cliente.foto;
        }
        return clienteOriginal;
      })
    })
  }

  delete(cliente: Cliente): void {
    swal.fire({
      title: 'Esta Seguro?',
      text: `¿Seguro que desea eliminar al cliente ${cliente.nombre} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.delete(cliente.id).subscribe(
          () => {
            this.clientes = this.clientes.filter(cli => cli !== cliente)
            swal.fire(
              'Eliminado!',
              `Cliente ${cliente.nombre} eliminado con exito.`,
              'success')
          }
        )

      }
    })
  }
  abrirModal(cliente: Cliente) {
    this.clienteSeleccionado = cliente;
    this.modalService.abrirModal();
  }

  getPdf(facturaId):Observable<Blob>{
    var url= URL_BACKEND+"/api/facturas/"+facturaId+"/export";
    return this.http.get(url, {responseType:'blob'})
  }


}
