import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-clase',
  templateUrl: './mi-clase.page.html',
  styleUrls: ['./mi-clase.page.scss'],
})
export class MiClasePage implements OnInit {

  public bloqueInicio: number;
  public bloqueTermino: number;
  public dia: string;
  public horaFin: string;
  public horaInicio: string;
  public idAsignatura: string;
  public nombreAsignatura: string;
  public nombreProfesor: string;
  public seccion: string;
  public sede: string;

  constructor(private route: ActivatedRoute, private activatedRoute: ActivatedRoute, private router: Router,) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params); // Agrega este console.log para verificar los datos
      this.bloqueInicio = +params.get('bloqueInicio');
      this.bloqueTermino = +params.get('bloqueTermino');
      this.dia = params.get('dia');
      this.horaFin = params.get('horaFin');
      this.horaInicio = params.get('horaInicio');
      this.idAsignatura = params.get('idAsignatura');
      this.nombreAsignatura = params.get('nombreAsignatura');
      this.nombreProfesor = params.get('nombreProfesor');
      this.seccion = params.get('seccion');
      this.sede = params.get('sede');
    });
  }
  volver() {
    this.router.navigate(['/inicio']);
  }
}
