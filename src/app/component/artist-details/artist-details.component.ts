import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MusicApiService } from 'src/app/services/music-api.service';
import { ArtistModel } from 'src/app/models/artist.model';
import { AlbumModel } from 'src/app/models/album.model';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {
  mbid: string;
  artist: ArtistModel;
  albuns: AlbumModel[];

  constructor(private route: ActivatedRoute, private musicAPI: MusicApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.mbid = params["id"];
      this.albuns = [];

      if(this.mbid && this.mbid !== ""){
        this.musicAPI.getArtistInfo(this.mbid).subscribe(json => {
          console.log(json);
          this.artist = new ArtistModel(this.mbid, json.artist.name);
          this.artist.biography = json.artist.bio.summary;
        });

        this.musicAPI.getAlbumsByArtist(this.mbid, 10, 1).subscribe(json => {
          console.log(json);
          json.topalbums.album.forEach(album => {
            let newAlbum: AlbumModel = new AlbumModel(album.mbid, album.name);
            newAlbum.urlImg = album.image[3]["#text"];
            this.albuns.push(newAlbum);
          });
        });
      }
    });
  }

}
