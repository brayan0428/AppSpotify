import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log('Servicio inicializado');
   }

   getQuery(query:string){
      const url = `https://api.spotify.com/${query}`;
      const headers = new HttpHeaders({
        'Authorization':'Bearer BQCa-r_Wa6oZoT2wTa1t8J_uZ8OiL9PC7fiv32hDBpo7plUobAQ_reS4VpluARV_Tv8phB_c3I1RU1mPbhc'
      })
      return this.http.get(url,{headers});
   }

   getReleases(){
     return this.getQuery('v1/browse/new-releases').pipe(map(
        (data:any) =>{
          return data.albums.items;
        }
     ))
   }

   getArtistas(termino:string){
      return this.getQuery(`v1/search?q=${termino}&type=artist`).pipe(map(
        (data:any) =>{
          return data.artists.items;
        }
     ))
   }

   getArtista(id:string){
    return this.getQuery(`v1/artists/${id}`).pipe(map(
        (data:any) =>{
          return data;
        }
    ))
   }

   getTopTracks(id:string){
      return this.getQuery(`v1/artists/${id}/top-tracks?country=us`).pipe(map (
        (data:any) => data.tracks
      ));
   }
}
