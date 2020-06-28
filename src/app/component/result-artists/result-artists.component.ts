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
  listArtists: ArtistModel[] = [];

  constructor(private musicAPI: MusicApiService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.setListArtists();
  }

  setListArtists = () => {
    this.listArtists = [];
    if(this.searchText && this.searchText !== ""){
      this.musicAPI.searchArtistsByName(this.searchText, 10, 1).subscribe(json => {
        console.log(json);
        json.results.artistmatches.artist.forEach(artist => {
          this.listArtists.push(new ArtistModel(artist.mbid, artist.name));
        });
      });
    }
  }

}
