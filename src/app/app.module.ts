import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './header/search/search.component';
// import { MenuComponent } from './header/menu/menu.component';
import { HomepageComponent } from './homepage/homepage.component';
// import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { SliderImgComponent } from './homepage/slider-img/slider-img.component';
import { CardGridComponent } from './homepage/card-grid/card-grid.component';
import { MoviesComponent } from './movies/movies.component';
import { StreamComponent } from './stream/stream.component';
import { StreamCardGridComponent } from './stream/stream-card-grid/stream-card-grid.component';
import { GiftcardComponent } from './giftcard/giftcard.component';
import { CouponsComponent } from './giftcard/coupons/coupons.component';
// import { MoviesComponent } from './header/movies/movies.component';
// import { StreamComponent } from './header/stream/stream.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    // MenuComponent,
    HomepageComponent,
    // FooterComponent,
    SliderImgComponent,
    CardGridComponent,
    MoviesComponent,
    StreamComponent,
    routingComponents,
    MoviesComponent,
    StreamComponent,
    StreamCardGridComponent,
    GiftcardComponent,
    CouponsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
