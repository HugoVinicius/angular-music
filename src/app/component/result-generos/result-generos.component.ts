import { Component, OnInit, Input } from '@angular/core';
import { ArtistModel } from 'src/app/models/artist.model';
import { MusicApiService } from 'src/app/services/music-api.service';

@Component({
  selector: 'app-result-generos',
  templateUrl: './result-generos.component.html',
  styleUrls: ['./result-generos.component.css']
})
export class ResultGenerosComponent implements OnInit {
  @Input() searchText: string;
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
      this.musicAPI.searchArtistsByGenre(this.searchText, 10, 1).subscribe(json => {
        console.log(json);
        json.topartists.artist.forEach(artist => {
          this.listArtists.push(new ArtistModel(artist.mbid, artist.name));
        });
        this.loading = false;
      });
    }
  }

}
