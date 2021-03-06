export class AlbumModel  {
    id: string;
    name: string;
    nameArtist: string;
    urlImg: string;
    summary: string;
    published: string;
    duration: string;
    static readonly constArtistUrl = "artist:";
    static readonly constAlbumUrl = "-album:";
  
    constructor(
      id: string,
      name: string
    ) {
      this.id = id;
      this.name = name;
      this.duration = "0:00";
    }
  }
  