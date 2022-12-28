import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../cliente';
import { Region } from '../../region';
import { ClienteService } from '../../cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public cliente: Cliente = new Cliente();
  public regiones: Region[];
  public funcion = "Crear "
  public errores: string[];


  constructor(private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCliente();
    this.cargarRegiones();
  }

  public cargarRegiones(): void {
    this.clienteService.getRegiones().subscribe(regiones => this.regiones = regiones);
  }

  public cargarCliente(): void {
    this.funcion = "Actualizar"
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.clienteService.getCliente(id).subscribe((cliente) => this.cliente = cliente)
      }
    })
  }


  public create(): void {
    this.clienteService.create(this.cliente).subscribe(
      json => {
       // console.log(json)
        this.router.navigate(['/clientes'])
        swal.fire('Nuevo Cliente', `${json.mensaje}: ${json.cliente.nombre} creado correctamente`, 'success')
      },
      err => {
        this.errores = err.error.errors as string[];
        console.error(err.error.errors);
        console.error('Codigo error desde el backend: ' + err.status);
      }
    );
  }

  public update(): void {
    this.cliente.facturas=null;
    this.clienteService.update(this.cliente).subscribe(
      json => {
        this.router.navigate(['/clientes'])
        swal.fire('Cliente actulizado', `${json.mensaje}: ${json.cliente.nombre} actualizado con exito`, 'success')
      },
      err => {
        this.errores = err.error.errors as string[];
        console.error(err.error.errors);
        console.error('Codigo error desde el backend: ' + err.status);
      }
    )
  }

  compararRegion(o1: Region, o2: Region): boolean {
    if(o1===undefined&& o2===undefined){
      return true;
    }
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined? false : o1.id === o2.id;

  }


}
