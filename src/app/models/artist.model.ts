export class ArtistModel  {
    id: string;
    name: string;
    biography: string;
    static readonly constArtistUrl = "artist:";
  
    constructor(
      id: string,
      name: string
    ) {
      this.id = id;
      this.name = name;
    }
  }
  