import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css'],
})
export class CardGridComponent implements OnInit {
  cards = [
    {
      image: '../assets/images/films/film1.webp',
      name: 'K.G.F Chapter 2',
      type: 'Action/Drama/Period',
    },
    {
      image: '../assets/images/films/beast.webp',
      name: 'Beast',
      type: 'Action/Comedy/Thriller',
    },
    {
      image: '../assets/images/films/james.webp',
      name: 'James',
      type: 'Action/Comedy/Drama',
    },
    {
      image: '../assets/images/films/RRR.webp',
      name: 'RRR',
      type: 'Action/Drama/Thriller',
    },
    {
      image: '../assets/images/films/jersy.webp',
      name: 'Jersy',
      type: 'Action/Drama/Thriller',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
