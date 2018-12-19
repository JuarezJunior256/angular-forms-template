import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  userName: string;

  powers = ['Super Força', 'Super Flexibilidade',  'Super Calor'];

  submitted = true;

  onSubmit() { this.submitted = false; }

  newHero() {
     // this.model = new Hero(42, '', '');
  }

  buscar() {
    console.log(this.userName);

  }

  constructor() { }

  ngOnInit() {

  }

}
