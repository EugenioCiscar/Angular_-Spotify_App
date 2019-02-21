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
      'Authorization':'Bearer BQAHljvhNkHdP2COQVaSuv3qzQuVX_Qk2EztbyggAj8zGoMjeSVTZBCVWNHBEJQ9B3jRURB78b3j_olo22M'
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

  getArtista(termino:string){
  // const headers = new HttpHeaders({
    //  'Authorization':'Bearer BQAHljvhNkHdP2COQVaSuv3qzQuVX_Qk2EztbyggAj8zGoMjeSVTZBCVWNHBEJQ9B3jRURB78b3j_olo22M'})

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe(map(data=> data['artists'].items ));
   // this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})

      
   
  
  }
}
