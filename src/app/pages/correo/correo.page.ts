import { Usuario } from './../../model/usuario';
import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
})
export class CorreoPage implements OnInit {

  public correo: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public ingresarPaginaValidarRespuestaSecreta(): void {
    const usuario = new Usuario('', '', '', '', '');
    const usuarioEncontrado = usuario.buscarUsuarioPorCorreo(this.correo);
    if (!usuarioEncontrado) {
      alert('CORREO NO REGISTRADO EN EL SISTEMA');
    }
    else {
      const navigationExtras: NavigationExtras = {
        state: {
          usuario: usuarioEncontrado
        }
      };
      this.router.navigate(['/pregunta'], navigationExtras);
    }
  }
  irALogin() {
    
    this.router.navigate(['/login']);
  }

}
