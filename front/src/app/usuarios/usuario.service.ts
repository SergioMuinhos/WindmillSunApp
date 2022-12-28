import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, map, Observable, tap, throwError } from "rxjs";
import { URL_BACKEND } from "../config/config";
import { ChangePass } from "../header/password/changePass";
import { Rol } from "./rol";
import { Usuario } from "./usuario";
import { UsuarioRol } from "./usuarioRol";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlEndPoint: string = URL_BACKEND + '/api/usuarios'


  constructor(private http: HttpClient,
    private router: Router) { }



  getUsuariosPage(page: number): Observable<any> {
    return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
      tap((response: any) => {
        (response.content as Usuario[]).forEach(usuario => {
          //console.log(usuario.nombre)
        });
      }),
      map((response: any) => {
        (response.content as Usuario[]).map(usuario => {
          usuario.nombre = usuario.nombre.toUpperCase();
          return usuario;
        });
        return response;
      }),
      tap(response => {
        (response.content as Usuario[]).forEach(usuario => {
        })
      })
    )
  }

  getUsuarios():Observable<any>{
    return this.http.get<Usuario[]>(this.urlEndPoint);
  }


  getRoles(){
    return this.http.get<Rol[]>(this.urlEndPoint+'/roles')
  }

  createUsuario(usuario:UsuarioRol):Observable<any>{
    return this.http.post<any>(this.urlEndPoint,usuario).pipe(
      catchError(e=>{
        if (e.status == 400) {
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(()=>e);
      })
    )

  }

  delete(id: number): Observable<UsuarioRol> {
    return this.http.delete<UsuarioRol>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        // this.router.navigate(['/clientes']);
        return throwError(() => e);
      })
    );
  }

  changePassword(passwords:ChangePass, username:string){
    return this.http.post<any>(URL_BACKEND+"/api/password/"+username,passwords).pipe(
      catchError(e=>{
        if (e.status == 400) {
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(()=>e);
      })
    )
  }

}