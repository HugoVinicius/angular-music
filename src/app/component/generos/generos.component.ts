import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css']
})
export class GenerosComponent implements OnInit {
  genres: string[] = ["Blues", "Eletronica", "Heavy Metal", "Hip Hop", "Jazz", "Pop", "Rap", "Reggae", "Rock", "Sertanejo"];
  genreSel: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onClickGenre(genreName) {
    this.genreSel = genreName;
  }

}
