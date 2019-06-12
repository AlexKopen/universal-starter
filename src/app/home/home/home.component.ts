import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  iconClasses = [
    'fab fa-cloudscale',
    'fas fa-laptop-code',
    'fas fa-cloud',
    'fas fa-pencil-ruler',
    'fas fa-chart-pie',
    'fas fa-clock'
  ];

  constructor() {}

  ngOnInit() {}
}
