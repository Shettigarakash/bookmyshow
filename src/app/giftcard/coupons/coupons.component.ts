import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css'],
})
export class CouponsComponent implements OnInit {
  offers = [
    { image: '../assets/images/films/giftcard1.jpg' },
    { image: '../assets/images/films/giftcard2.jpg' },
    { image: '../assets/images/films/giftcard3.jpg' },
    { image: '../assets/images/films/giftcard4.jpg' },
    { image: '../assets/images/films/giftcard5.jpg' },
    { image: '../assets/images/films/giftcard6.webp' },
    { image: '../assets/images/films/giftcard7.webp' },
    { image: '../assets/images/films/giftcard8.jpg' },
    { image: '../assets/images/films/giftcard9.jpg' },
    { image: '../assets/images/films/giftcard10.jpg' },
    { image: '../assets/images/films/giftcard11.webp' },
    { image: '../assets/images/films/giftcard12.jpg' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
