import { Injectable } from '@angular/core';

import { Cliente } from './cliente';
import { Region } from './region'
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, catchError, tap } from 'rxjs/operators';


import { URL_BACKEND } from '../config/config';
import { Producto } from '../facturas/models/producto';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint: string = URL_BACKEND+'/api/clientes'


  constructor(private http: HttpClient,
    private router: Router) { }


  getRegiones(): Observable<Region[]> {
    return this.http.get<Region[]>(this.urlEndPoint + '/regiones')
  }

  getClientes(page: number): Observable<any> {
    return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
      tap((response: any) => {
        (response.content as Cliente[]).forEach(cliente => {

        });
      }),
      map((response: any) => {
        (response.content as Cliente[]).map(cliente => {
          cliente.nombre = cliente.nombre.toUpperCase();
          return cliente;
        });
        return response;
      }),
      tap(response => {
        (response.content as Cliente[]).forEach(cliente => {

        })
      })
    )
  }

  create(cliente: Cliente): Observable<any> {
    return this.http.post<any>(this.urlEndPoint, cliente).pipe(
      catchError(e => {
        if (e.status == 400) {
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        //this.router.navigate(['/clientes']);

        return throwError(() => e);
      })
    );
  }

  getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(this.urlEndPoint + "/" + id).pipe(
      catchError(e => {
        if (e.status != 401 && e.error.mensaje) {
          this.router.navigate(['/clientes']);
          console.error(e.error.mensaje);
        }
        return throwError(() => e);
      })
    );
  }

  update(cliente: Cliente): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/${cliente.id}`, cliente).pipe(
      catchError(e => {
        if (e.status == 400) {
          return throwError(() => e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        //this.router.navigate(['/clientes']);

        return throwError(() => e);
      })
    );
  }

  delete(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        // this.router.navigate(['/clientes']);
        return throwError(() => e);
      })
    );
  }

  subirFoto(archivo: File, id): Observable<HttpEvent<{}>> {

    let formdata = new FormData();
    formdata.append("archivo", archivo);
    formdata.append("id", id);

    const req = new HttpRequest('POST', `${this.urlEndPoint}/upload`, formdata, {
      reportProgress: true
    });

    return this.http.request(req);
    /*.pipe(
      map((response: any) => response.cliente as Cliente),
      catchError(e => {
        if (e.status == 400) {
          return throwError(e);
        }
        console.error(e.error.mensaje)
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e)
      })
    )*/;

  }

  createProducto(producto:Producto): Observable<any>{
    return this.http.post<any>(URL_BACKEND+"/api/productos", producto).pipe(
      catchError(e => {
        if (e.status == 400) {
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        //this.router.navigate(['/clientes']);

        return throwError(() => e);
      })
    );
  }

}
