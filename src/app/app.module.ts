import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { IndexComponent } from './pages/index/index.component';
import { GeneroComponent } from './pages/genero/genero.component';
import { TopartistaComponent } from './pages/topartista/topartista.component';
import { TopmusicaComponent } from './pages/topmusica/topmusica.component';
import { ArtistaComponent } from './pages/artista/artista.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    IndexComponent,
    GeneroComponent,
    TopartistaComponent,
    TopmusicaComponent,
    ArtistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
