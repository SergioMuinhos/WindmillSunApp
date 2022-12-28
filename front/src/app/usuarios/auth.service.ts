import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_BACKEND } from '../config/config';
import { RoleGuard } from './guards/role.guard';
import { Rol } from './rol';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _usuario: Usuario;
  private _token: string;
  private _username:string = '';

  constructor(private http: HttpClient) { }

  public get usuario(): Usuario {
    if (this._usuario != null) {
      return this._usuario;
    } else if (this._usuario == null && sessionStorage.getItem('usuario') != null) {
      this._usuario = JSON.parse(sessionStorage.getItem('usuario')) as Usuario;
      return this._usuario
    }
    return new Usuario();
  }
  public get token(): string {
    if (this._token != null) {
      return this._token;
    } else if (this._token == null && sessionStorage.getItem('token') != null) {
      this._token = sessionStorage.getItem('token')
      return this._token;
    }
    return null;
  }
  getUsuario(): Usuario {
    return this._usuario;
  }

  login(usuario: Usuario): Observable<any> {
    const urlEndPoint = URL_BACKEND + '/oauth/token';
    const credenciales = btoa('angularapp' + ':' + '12345');
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + credenciales
    });
    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', usuario.username);
    params.set('password', usuario.password);
    this._username=usuario.username;
    return this.http.post<any>(urlEndPoint, params.toString(), { headers: httpHeaders })
  }

  guardarUsuario(accessToken: string): void {

    let payload = this.obtenerDatosToken(accessToken);
    this._usuario = new Usuario();
    this._usuario.nombre = payload.nombre;
    this._usuario.apellidos = payload.apellidos;
    this._usuario.email = payload.email;
    this._usuario.roles = payload.authorities;
    this._usuario.username = payload.username;
    sessionStorage.setItem('usuario', JSON.stringify(this._usuario));
  }

  guardarToken(accessToken: string): void {
    this._token = accessToken;
    sessionStorage.setItem('token', accessToken);
  }

  obtenerDatosToken(accessToken: String): any {
    if (accessToken != null) {
      return JSON.parse(atob(accessToken.split(".")[1]));
    }
    return null;
  }

  isAuthenticated(): boolean {
    let payload = this.obtenerDatosToken(this.token);
    if (payload != null && payload.user_name && payload.user_name) {
      return true;
    }
    return false;

  }

  hasRole(role: string): boolean {

    if (this.usuario.roles.includes(role)) {
      return true;
    }
    return false;
  }


  logout() {
    this._token = null;
    this._usuario = null;
    sessionStorage.clear();
  }


}
