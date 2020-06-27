import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const API_KEY = "9c9825bd8831d74a3e5183de141b8fa8";
const baseUrl = (method, params) => `http://ws.audioscrobbler.com/2.0/?api_key=${API_KEY}&format=json&method=${method}&lang=pt${params}`;

// methods
const methodTagTopArtists = "tag.gettopartists";
const methodArtistInfo = "artist.getinfo";
const methodArtistSearch = "artist.search";
const methodArtistTopAlbums = "artist.gettopalbums";
const methodAlbumInfo = "album.getinfo";

// params
const paramTag = (genre) => `&tag=${genre}`;
const paramArtist = (artist) => `&artist=${artist}`;
const paramMbid = (id) => `&mbid=${id}`;
const paramPage = (pageNumber) => `&page=${pageNumber}`;
const paramLimit = "&limit=20";

@Injectable({
  providedIn: 'root'
})
export class MusicApiService {

  constructor(private http: HttpClient) { }

  // procura os artistas por um nome de gênero
  getArtistsByGenre(genre: string, pageNum: number): Observable<any> {
    let params = paramTag(genre) + paramLimit + paramPage(pageNum);
    let url = baseUrl(methodTagTopArtists, params);
    console.log(url);
    return this.http.get(url);
  }

  // recupera informações do artista pelo id
  getArtistInfo(idArtist: string): Observable<any> {
    let params = paramMbid(idArtist);
    let url = baseUrl(methodArtistInfo, params);
    console.log(url);
    return this.http.get(url);
  }

  // procura um artista pelo nome
  getArtistInfoByName(nameArtist: string, pageNum: number): Observable<any> {
    let params = paramArtist(nameArtist);
    let url = baseUrl(methodArtistSearch, params);
    console.log(url);
    return this.http.get(url);
  }

  // recupera os albuns de um artista
  getAlbumsByArtist(idArtist: string): Observable<any> {
    let params = paramMbid(idArtist);
    let url = baseUrl(methodArtistTopAlbums, params);
    console.log(url);
    return this.http.get(url);
  }

  getAlbumByArtist(idAlbum: string): Observable<any> {
    let params = paramMbid(idAlbum);
    let url = baseUrl(methodAlbumInfo, params);
    console.log(url);
    return this.http.get(url);
  }
}
