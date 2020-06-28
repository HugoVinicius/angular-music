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
  loadingArtist: boolean = false;
  loadingAlbums: boolean = false;

  constructor(private route: ActivatedRoute, private musicAPI: MusicApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.mbid = <string>params["id"];
      let idxArtist = this.mbid.indexOf(ArtistModel.constArtistUrl);
      let artistFind = "";
      if(idxArtist >= 0){
        artistFind = this.mbid.substring(idxArtist + ArtistModel.constArtistUrl.length, this.mbid.length);
        console.log("Artista: " + artistFind);
      }

      this.albuns = [];

      if(this.mbid && this.mbid !== ""){
        this.loadingArtist = true;
        if(artistFind === "")
          this.musicAPI.getArtistInfo(this.mbid).subscribe(json => this.setArtistJson(json));
        else 
          this.musicAPI.getArtistInfoByName(artistFind).subscribe(json => this.setArtistJson(json));

        this.loadingAlbums = true;
        if(artistFind === "")
          this.musicAPI.getAlbumsByArtist(this.mbid, 10, 1).subscribe(json => this.setAlbumJson(json));
        else
          this.musicAPI.getAlbumsByArtistName(artistFind, 10, 1).subscribe(json => this.setAlbumJson(json));
      }
    });
  }

  setArtistJson = (json) => {
    console.log(json);
    if(!json.error){
      this.artist = new ArtistModel(json.mbid, json.artist.name);
      this.artist.biography = json.artist.bio.summary;
    }
    this.loadingArtist = false;
  }

  setAlbumJson = (json) => {
    console.log(json);
    if(!json.error){
      json.topalbums.album.forEach(album => {
        let idAlbum = album.mbid;
        if(!idAlbum){
          let artistName = album.artist.name;
          let albumName = album.name;
          idAlbum = AlbumModel.constArtistUrl + artistName + AlbumModel.constAlbumUrl + albumName;
          idAlbum = idAlbum.replace(/\//g, "%2F");
        }

        let newAlbum: AlbumModel = new AlbumModel(idAlbum, album.name);
        newAlbum.urlImg = this.setAlbumImagem(album.image);

        this.albuns.push(newAlbum);
      });
    }
    this.loadingAlbums = false;
  }

  setAlbumImagem = (json) => {
    let imgUrl = "";

    let findImg = json.find(img => img.size === "extralarge");
    if(findImg)
        imgUrl = findImg["#text"];
    else {
      findImg = json.find(img => img.size === "large");
      if(findImg)
          imgUrl = findImg["#text"];
    } 

    return imgUrl;
  }

}
