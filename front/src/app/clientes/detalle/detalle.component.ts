import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ModalService } from './modal.service';
import { FacturaService } from 'src/app/facturas/services/factura.service';
import { Factura } from 'src/app/facturas/models/factura';
import swal from 'sweetalert2';
import { AuthService } from 'src/app/usuarios/auth.service';
import { URL_BACKEND } from 'src/app/config/config';
import { Observable } from 'rxjs';

@Component({
  selector: 'detalle-cliente',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  @Input() cliente: Cliente;
  titulo: string = "Detalle";
  fotoseleccionada: File;
  progreso: number = 0;
  urlBackend: string = URL_BACKEND;
  blob: Blob;

  constructor(private clienteService: ClienteService,
    private facturaService: FacturaService,
    public modalService: ModalService,
    public authService: AuthService,
    private http: HttpClient) { }

  ngOnInit(): void { }
  seleccionarFoto(event) {
    this.fotoseleccionada = event.target.files[0];
    this.progreso = 0;
    //console.log(this.fotoseleccionada);
    if (this.fotoseleccionada.type.indexOf('image') < 0) {
      swal.fire('Error Seleccionando Foto: ', 'Debe selecionar una imagen valida ', 'error');
      this.fotoseleccionada = null;
    }

  }
  subirFoto() {
    if (!this.fotoseleccionada) {
      swal.fire('Error Subiendo Foto: ', 'Debe selecionar una foto ', 'error');
    } else {
      this.clienteService.subirFoto(this.fotoseleccionada, this.cliente.id)
        .subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progreso = Math.round((event.loaded / event.total) * 100);
          } else if (event.type === HttpEventType.Response) {
            let response: any = event.body;
            this.cliente = response.cliente as Cliente;

            this.modalService.notificarUpload.emit(this.cliente);

            swal.fire('La foto se ha subido correctamente', response.mensaje, 'success');
          }

          //this.cliente = cliente;

        });
    }
  }

  cerrarModal() {
    this.fotoseleccionada = null;
    this.progreso = 0;
    this.modalService.cerrarModal();

  }

  delete(factura: Factura) {
    this.facturaService.delete(factura.id)

    swal.fire({
      title: 'Esta Seguro?',
      text: `¿Seguro que desea eliminar la factura ${factura.id}: ${factura.descripcion} de cliente ${this.cliente.nombre} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.facturaService.delete(factura.id).subscribe(
          () => {
            this.cliente.facturas = this.cliente.facturas.filter(f => f !== factura)
            swal.fire(
              'Eliminado!',
              `Factura ${factura.id}: ${factura.descripcion}  del cliente ${this.cliente.nombre} eliminado con exito.`,
              'success')
          }
        )

      }
    })
  }

  getPdf(factura: Factura) {

    this.facturaService.getPDF(factura.id + "").subscribe((data) => {
      this.blob = new Blob([data], { type: 'application/pdf' });
      var downloadURL = window.URL.createObjectURL(data);
      var link = document.createElement('a');
      link.href = downloadURL;
      link.download = "Factura" + factura.id +"_"+ this.formatDate(new Date());
      link.click();

    })
  }


  padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  formatDate(date) {
    return [
      this.padTo2Digits(date.getDate()),
      this.padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }


}
