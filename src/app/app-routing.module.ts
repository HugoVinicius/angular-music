import { TopartistaComponent } from './pages/topartista/topartista.component';
import { TopmusicaComponent } from './pages/topmusica/topmusica.component';
import { ArtistaComponent } from './pages/artista/artista.component';
import { GeneroComponent } from './pages/genero/genero.component';
import { IndexComponent } from './pages/index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'generos', component: GeneroComponent },
  { path: 'artistas', component: ArtistaComponent },
  { path: 'top-musicas', component: TopmusicaComponent },
  { path: 'top-artistas', component: TopartistaComponent },
  { path: '**', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
