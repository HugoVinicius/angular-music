import { Component, OnInit } from '@angular/core';
import { ArtistModel } from 'src/app/models/artist.model';
import { MusicApiService } from 'src/app/services/music-api.service';

@Component({
  selector: 'app-topartista',
  templateUrl: './topartista.component.html',
  styleUrls: ['./topartista.component.css']
})
export class TopartistaComponent implements OnInit {
  artists: ArtistModel[] = [];
  loading: boolean = false;
  
  constructor(private musicAPI: MusicApiService) { }

  ngOnInit(): void {
    this.loading = true;
    this.musicAPI.getTopArtist(100, 1).subscribe(json => {
      console.log(json);
      json.artists.artist.forEach(artist => this.artists.push(new ArtistModel(artist.mbid, artist.name)));
      this.loading = false;
    });
  }

}
