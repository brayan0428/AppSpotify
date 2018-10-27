import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  artistas:any[] = [];
  cargando:boolean;
  constructor(private spotify:SpotifyService) { }

  ngOnInit() {
  }

  buscar(e:string){
    if(e.length <= 0){
      this.artistas=[];
      return;
    }
    this.cargando=true;
    this.spotify.getArtistas(e).subscribe((data:any) =>{
      this.artistas = data;
      this.cargando=false;
    })
  }

}
