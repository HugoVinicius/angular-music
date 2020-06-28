import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { GeneroComponent } from './component/genero/genero.component';
import { FooterComponent } from './component/footer/footer.component';
import { IndexComponent } from './pages/index/index.component';
import { TopartistaComponent } from './pages/topartista/topartista.component';
import { TopmusicaComponent } from './pages/topmusica/topmusica.component';
import { ArtistaComponent } from './pages/artista/artista.component';
import { GenerosComponent } from './pages/generos/generos.component';
import { SearchComponent } from './component/search/search.component';
import { ResultArtistsComponent } from './component/result-artists/result-artists.component';
import { ArtistDetailsComponent } from './component/artist-details/artist-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    IndexComponent,
    GeneroComponent,
    TopartistaComponent,
    TopmusicaComponent,
    ArtistaComponent,
    GenerosComponent,
    GeneroComponent,
    FooterComponent,
    SearchComponent,
    ResultArtistsComponent,
    ArtistDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
