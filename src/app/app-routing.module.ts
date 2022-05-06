import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftcardComponent } from './giftcard/giftcard.component';
import { HeaderComponent } from './header/header.component';
import { CardGridComponent } from './homepage/card-grid/card-grid.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SliderImgComponent } from './homepage/slider-img/slider-img.component';
import { MoviesComponent } from './movies/movies.component';
import { StreamComponent } from './stream/stream.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'stream', component: StreamComponent },
  { path: 'giftcards', component: GiftcardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  MoviesComponent,
  StreamComponent,
  HeaderComponent,
  GiftcardComponent,
];
