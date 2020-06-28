import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css']
})
export class GenerosComponent implements OnInit {
  genres: string[] = [];
  genreSel: string = "";
  searchLabel: string;

  constructor() { 
      this.searchLabel = "Ou digite um nome de gênero para pesquisar: ";
      this.genres = ["Blues", "Eletrônica", "Heavy Metal", "Hip Hop", "Jazz", "Pop", "Rap", "Reggae", "Rock", "Sertanejo"];
  }

  ngOnInit(): void {
  }

  onClickGenre(genreName) {
    this.genreSel = this.removeSpecialChars(genreName);
  }

  handleValueSearch(text: string) {
    this.genreSel = this.removeSpecialChars(text);
  }

  removeSpecialChars(text: string){
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

}
