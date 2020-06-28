import { TopartistaComponent } from './pages/topartista/topartista.component';
import { TopmusicaComponent } from './pages/topmusica/topmusica.component';
import { ArtistaComponent } from './pages/artista/artista.component';
import { IndexComponent } from './pages/index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerosComponent } from './pages/generos/generos.component';
import { ArtistDetailsComponent } from './component/artist-details/artist-details.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'generos', component: GenerosComponent },
  { path: 'artistas', component: ArtistaComponent },
  { path: 'artista/:id', component: ArtistDetailsComponent },
  { path: 'top-musicas', component: TopmusicaComponent },
  { path: 'top-artistas', component: TopartistaComponent },
  { path: '**', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
