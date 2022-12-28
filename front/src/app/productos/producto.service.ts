import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, throwError } from "rxjs";
import { URL_BACKEND } from "../config/config";
import { Producto } from "../facturas/models/producto";




@Injectable({
    providedIn: 'root'
  })
  export class ProductoService {

    private urlEndPoint: string = URL_BACKEND+'/api/productos'

    constructor(private http: HttpClient,
        private router: Router) { }
    

create(producto:Producto){
    return this.http.post<any>(this.urlEndPoint,producto).pipe(
        catchError(e=>{
            if(e.status==400){
                return throwError(e);
            }
            if(e.error.mensaje){
                console.error(e.error.mensaje);
            }
            return throwError(()=>e);
        })
    )
}

  }

