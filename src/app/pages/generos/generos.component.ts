import { Component, OnInit } from '@angular/core';
import { GenresModel } from 'src/app/models/genres.model';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css']
})
export class GenerosComponent implements OnInit {
  genres: GenresModel[] = [];
  genreSel: string = "";
  searchLabel: string;

  constructor() { 
      this.searchLabel = "Ou digite um nome de gênero para pesquisar: ";
      this.genres.push(new GenresModel("Blues", "blues"));
      this.genres.push(new GenresModel("Eletrônica", "eletronica"));
      this.genres.push(new GenresModel("Heavy Metal", "heavy metal"));
      this.genres.push(new GenresModel("Hip Hop", "hip hop"));
      this.genres.push(new GenresModel("Jazz", "jazz"));
      this.genres.push(new GenresModel("Pop", "pop"));
      this.genres.push(new GenresModel("Rap", "rap"));
      this.genres.push(new GenresModel("Reggae", "reggae"));
      this.genres.push(new GenresModel("Rock", "rock"));
      this.genres.push(new GenresModel("Sertanejo", "sertanejo"));
  }

  ngOnInit(): void {
  }

  onClickGenre(genreName) {
    this.genreSel = genreName;
  }

  handleValueSearch(text: string) {
    this.genreSel = text;
  }

}
