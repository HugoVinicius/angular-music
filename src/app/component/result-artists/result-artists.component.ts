import { Component, OnInit, Input } from '@angular/core';
import { ArtistModel } from 'src/app/models/artist.model';
import { MusicApiService } from 'src/app/services/music-api.service';

@Component({
  selector: 'app-result-artists',
  templateUrl: './result-artists.component.html',
  styleUrls: ['./result-artists.component.css']
})
export class ResultArtistsComponent implements OnInit {
  @Input() searchText: string;
  @Input() searchByName: boolean; // se true: pesquisa pelo nome do artista, se false pesquisa os artistas pelo genero
  listArtists: ArtistModel[] = [];
  loading: boolean = false;

  constructor(private musicAPI: MusicApiService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.setListArtists();
  }

  setListArtists = () => {
    this.listArtists = [];
    if(this.searchText && this.searchText !== ""){
      this.loading = true;

      if(this.searchByName){
        this.musicAPI.searchArtistsByName(this.searchText, 10, 1).subscribe(json => {
          console.log(json);
          json.results.artistmatches.artist.forEach(artist => this.setArtist(artist));
          this.loading = false;
        });
      } else {
        this.musicAPI.searchArtistsByGenre(this.searchText, 10, 1).subscribe(json => {
          console.log(json);
          json.topartists.artist.forEach(artist => this.setArtist(artist));
          this.loading = false;
        });
      }
    }
  }

  setArtist = (artist) => {

    let idArtist = artist.mbid;
    if(!idArtist){
      let artistName = artist.name.replace(/\//g, "%2F");
      idArtist = ArtistModel.constArtistUrl + artistName;
    }

    this.listArtists.push(new ArtistModel(idArtist, artist.name));
  }

}
