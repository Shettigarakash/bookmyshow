import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stream-card-grid',
  templateUrl: './stream-card-grid.component.html',
  styleUrls: ['./stream-card-grid.component.css'],
})
export class StreamCardGridComponent implements OnInit {
  cards = [
    {
      image: '../assets/images/films/spider.webp',
    },
    {
      image: '../assets/images/films/room.webp',
    },
    {
      image: '../assets/images/films/morbius.webp',
    },
    {
      image: '../assets/images/films/batman.webp',
    },
    {
      image: '../assets/images/films/charted.webp',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
