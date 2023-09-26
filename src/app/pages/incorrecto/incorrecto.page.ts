import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-incorrecto',
  templateUrl: './incorrecto.page.html',
  styleUrls: ['./incorrecto.page.scss'],
})
export class IncorrectoPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  irALogin() {
    this.router.navigate(['/login']);
  }

}
