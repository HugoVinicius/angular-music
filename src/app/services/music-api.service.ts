import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_KEY = '9c9825bd8831d74a3e5183de141b8fa8';
const baseUrl = (method, params) => `https://ws.audioscrobbler.com/2.0/?api_key=${API_KEY}&format=json&method=${method}&lang=pt${params}`;

// methods
const methodTagTopArtists = 'tag.gettopartists';
const methodArtistInfo = 'artist.getinfo';
const methodArtistSearch = 'artist.search';
const methodArtistTopAlbums = 'artist.gettopalbums';
const methodAlbumInfo = 'album.getinfo';
const methodChartTopArtists = 'chart.gettopartists';
const methodChartTopTracks = 'chart.gettoptracks';

// params
const paramTag = (genre) => `&tag=${genre}`;
const paramArtist = (artist) => `&artist=${artist}`;
const paramAlbum= (album) => `&album=${album}`;
const paramMbid = (id) => `&mbid=${id}`;
const paramPage = (pageNumber) => `&page=${pageNumber}`;
const paramLimit = (limitValue) => `&limit=${limitValue}`;

@Injectable({
  providedIn: 'root'
})
export class MusicApiService {

  constructor(private http: HttpClient) { }

  // procura os artistas por um nome de gênero
  searchArtistsByGenre(genre: string, quantity: number, pageNum: number): Observable<any> {
    const params = paramTag(genre) + paramLimit(quantity) + paramPage(pageNum);
    const url = baseUrl(methodTagTopArtists, params);
    console.log(url);
    return this.http.get(url);
  }

  // procura um artista pelo nome
  searchArtistsByName(nameArtist: string, quantity: number, pageNum: number): Observable<any> {
    const params = paramArtist(nameArtist) + paramLimit(quantity) + paramPage(pageNum);
    const url = baseUrl(methodArtistSearch, params);
    console.log(url);
    return this.http.get(url);
  }

  // recupera informações do artista pelo id
  getArtistInfo(idArtist: string): Observable<any> {
    const params = paramMbid(idArtist);
    const url = baseUrl(methodArtistInfo, params);
    console.log(url);
    return this.http.get(url);
  }

  // recupera informações do artista pelo seu nome
  getArtistInfoByName(artist: string): Observable<any> {
    const params = paramArtist(artist);
    const url = baseUrl(methodArtistInfo, params);
    console.log(url);
    return this.http.get(url);
  }

  // recupera os albuns de um artista
  getAlbumsByArtist(idArtist: string, quantity: number, pageNum: number): Observable<any> {
    const params = paramMbid(idArtist) + paramLimit(quantity) + paramPage(pageNum);
    const url = baseUrl(methodArtistTopAlbums, params);
    console.log(url);
    return this.http.get(url);
  }

  // recupera os albuns de um artista
  getAlbumsByArtistName(artist: string, quantity: number, pageNum: number): Observable<any> {
    const params = paramArtist(artist) + paramLimit(quantity) + paramPage(pageNum);
    const url = baseUrl(methodArtistTopAlbums, params);
    console.log(url);
    return this.http.get(url);
  }

  // recupera informações do album pelo id
  getAlbum(idAlbum: string): Observable<any> {
    const params = paramMbid(idAlbum);
    const url = baseUrl(methodAlbumInfo, params);
    console.log(url);
    return this.http.get(url);
  }

  // recupera informações do album pelo nome do artista e do album
  getAlbumByName(artist: string, album: string): Observable<any> {
    const params = paramArtist(artist) + paramAlbum(album);
    const url = baseUrl(methodAlbumInfo, params);
    console.log(url);
    return this.http.get(url);
  }

  // recupera os artistas mais populares
  getTopArtist(quantity: number, pageNum: number): Observable<any> {
    const params = paramLimit(quantity) + paramPage(pageNum);
    const url = baseUrl(methodChartTopArtists, params);
    console.log(url);
    return this.http.get(url);
  }

  // recupera as musicas mais populares
  getTopTracks(quantity: number, pageNum: number): Observable<any> {
    const params = paramLimit(quantity) + paramPage(pageNum);
    const url = baseUrl(methodChartTopTracks, params);
    console.log(url);
    return this.http.get(url);
  }
}
