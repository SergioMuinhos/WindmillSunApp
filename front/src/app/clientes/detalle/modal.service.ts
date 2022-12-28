import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modal: boolean = false;
  modal2:boolean=false;
  modal3:boolean=false;
  _notificarUpload = new EventEmitter<any>();


  constructor() { }


  get notificarUpload():EventEmitter<any>{
    return this._notificarUpload;
  }

  abrirModal() {
    this.modal = true;
  }

  abrirModalSecundario(){
    this.modal2=true;
  }
  abrirModalPerfil(){
    this.modal3=true;
  }

  cerrarModal() {
    this.modal = false;
    this.modal2= false;
    this.modal3= false;
  }


}
