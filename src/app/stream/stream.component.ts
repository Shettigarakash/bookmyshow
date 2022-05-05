import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css'],
})
export class StreamComponent implements OnInit {
  offers = [
    { image: '../assets/images/films/img1.webp' },
    { image: '../assets/images/films/img2.webp' },
    { image: '../assets/images/films/img3.webp' },
    { image: '../assets/images/films/img4.webp' },
    { image: '../assets/images/films/img5.webp' },
  ];

  cards = [
    {
      image: '../assets/images/films/film1.webp',
    },
    {
      image: '../assets/images/films/beast.webp',
    },
    {
      image: '../assets/images/films/james.webp',
    },
    {
      image: '../assets/images/films/RRR.webp',
    },
    {
      image: '../assets/images/films/jersy.webp',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
