import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {
  idArtista:string;
  artista:any = {};
  topTracks:any[] = [];
  cargando:boolean = true;
  constructor(private activatedRouted:ActivatedRoute,
              private spotify:SpotifyService) {
    activatedRouted.params.subscribe(data => {
      this.idArtista = data.id;
      this.getArtista();
      this.getTopTracks();
    })
   }

  ngOnInit() {
   
  }

  getArtista(){
    this.spotify.getArtista(this.idArtista).subscribe(data => {
      this.artista = data;
      this.cargando=false;
    })
  }

  getTopTracks(){
    this.spotify.getTopTracks(this.idArtista).subscribe(data => {
      this.topTracks = data;
      console.log(data);
    })
  }
}
