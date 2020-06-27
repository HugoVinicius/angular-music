import { Component, OnInit, Input } from '@angular/core';
import { MusicApiService } from '../../services/music-api.service';
import { ArtistModel } from '../../models/artist.model';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent implements OnInit {
  @Input() name: string;
  listArtists: ArtistModel[] = [];

  constructor(private musicAPI: MusicApiService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.setListArtists();
  }

  setListArtists = () => {
    this.listArtists = [];
    if(this.name && this.name !== ""){
      this.musicAPI.searchArtistsByGenre(this.name, 1).subscribe(json => {
        console.log(json);
        json.topartists.artist.forEach(artist => {
          this.listArtists.push(new ArtistModel(artist.mbid, artist.name));
        });
      });
    }
  }

}
