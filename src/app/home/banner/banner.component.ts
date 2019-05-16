import { Component, OnInit } from '@angular/core';
import { HomeSlide } from '../../shared/models/home-slide.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  homeSlide = new HomeSlide(
    'Our Call to Serve',
    'Since 1996, Reiser Relief has been providing relief, hope, and dignity to the poor, elderly, and homeless people of Haiti.',
    'impact-slide.jpg',
    'Support Us',
    '/',
    'Give Today'
  );

  constructor() {}

  ngOnInit() {}
}
