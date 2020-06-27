import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  searchLabel: string;

  constructor() { 
    this.searchLabel = "Digite o nome do artista: ";
  }

  ngOnInit(): void {
  }

}
