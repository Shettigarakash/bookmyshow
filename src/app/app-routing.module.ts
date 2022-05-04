import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { StreamComponent } from './stream/stream.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'stream', component: StreamComponent },
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
];
