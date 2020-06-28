import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AlbumModel } from 'src/app/models/album.model';
import { MusicApiService } from 'src/app/services/music-api.service';
import { TrackModel } from 'src/app/models/track.model';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  mbid: string;
  album: AlbumModel;
  tracks: TrackModel[];
  durationAlbumInSeconds: number;

  constructor(private route: ActivatedRoute, private musicAPI: MusicApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.mbid = params["idAlbum"];

      if(this.mbid && this.mbid !== ""){
        this.musicAPI.getAlbum(this.mbid).subscribe(json => {
          console.log(json);
          if(!json.error){
            this.album = new AlbumModel(this.mbid, json.album.name);
            this.album.nameArtist = json.album.artist;
            this.album.summary = json.album.wiki.summary;
            this.album.published = json.album.wiki.published;

            let findImg = json.album.image.find(img => img.size === "mega");
            if(findImg)
              this.album.urlImg = findImg["#text"];

            this.durationAlbumInSeconds = 0;
            this.tracks = [];
            json.album.tracks.track.forEach(track => {
              let timeInSeconds = parseInt(track.duration);
              this.durationAlbumInSeconds += timeInSeconds;
              let newTrack: TrackModel = new TrackModel(track.name, this.getDurationFormat(timeInSeconds));
              this.tracks.push(newTrack);
            });

            this.album.duration = this.getDurationFormat(this.durationAlbumInSeconds);

          }
        });
      }
    });
  }

  getDurationFormat = (timeInSeconds: number) => {

    let minutes = Math.floor(timeInSeconds / 60);
    let hours = Math.floor(minutes / 60);
    let seconds = timeInSeconds - (hours * 60 * 60) - (minutes * 60);

    let durationFormat = "";
    if(hours > 0)
      durationFormat += hours + ":";

    durationFormat += minutes + ":" + seconds;

    return durationFormat;
  }

}
