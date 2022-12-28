import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ModalService } from '../clientes/detalle/modal.service';
import { AuthService } from '../usuarios/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'WindMill Sun ';

  constructor(public authService: AuthService, 
    private router: Router,
     public modalService: ModalService) { }

  logout(): void {
    Swal.fire('LogOut', 'Session cerrada ', 'success');
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

  abrirModalPerfil() {
    this.modalService.abrirModalPerfil();
  }

  abrirModalPassword(){
    this.modalService.abrirModalSecundario();
  }

}
