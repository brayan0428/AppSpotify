import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones:any[] = [];
  cargando:boolean=true;
  error:boolean=false;
  mensajeError:string;
  constructor(private spotify:SpotifyService) { 
    this.spotify.getReleases().subscribe((data:any)=> {
      this.nuevasCanciones = data;
      this.cargando=false;
    }, errorService => {
      this.error = true;
      this.cargando=false;
      this.mensajeError= errorService.error.error.message;
    })
  }

  ngOnInit() {
    
  }

}
