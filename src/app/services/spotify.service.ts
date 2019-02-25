import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  

  constructor(private http: HttpClient) { 
    console.log('Spotify Service listo')
  }
  
  getQuery(query:string){
    const url=`https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQC9EQKcRN2L4qBiljU2nnsexY6jrc22x_K2ZL198aTGRdEyGfEDJSlkZxRgcDvHfYgYwaJ_YEaal3-pwPo'
    });

    return this.http.get(url,{headers});
  }

  getNewReleases(){

   // const headers = new HttpHeaders({
   //   'Authorization':'Bearer BQAHljvhNkHdP2COQVaSuv3qzQuVX_Qk2EztbyggAj8zGoMjeSVTZBCVWNHBEJQ9B3jRURB78b3j_olo22M' })

    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(data=> data['albums'].items));

     //this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})
      
   
  }

  getArtistas(termino:string){
  // const headers = new HttpHeaders({
    //  'Authorization':'Bearer BQAHljvhNkHdP2COQVaSuv3qzQuVX_Qk2EztbyggAj8zGoMjeSVTZBCVWNHBEJQ9B3jRURB78b3j_olo22M'})

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe(map(data=> data['artists'].items ));
   // this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
  }

   getArtista(id:string){
  
      return this.getQuery(`artists/${id}`)
      //.pipe(map(data=> data['artists'].items ));
    
  
   
   }
   getTopTracks(id:string){
  
    return this.getQuery(`artists/${id}/top-tracks?country=ES`)
    .pipe(map(data=> data['tracks']));
  

 
 }

}
