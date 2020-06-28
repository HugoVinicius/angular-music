import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  searchLabel: string;
  searchValue: string = "";

  constructor() { 
    this.searchLabel = "Digite o nome do artista: ";
  }

  ngOnInit(): void {
  }

  handleValueSearch(text: string) {
    this.searchValue = text;
    alert(this.searchValue);
  }

}
