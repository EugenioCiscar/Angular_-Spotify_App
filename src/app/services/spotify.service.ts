import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  

  constructor(private http: HttpClient) { 
    console.log('Spotify Service listo')
  }
  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCkACPpFPyxv1TvgYnnLNDaGfwFru1C4s-fxeLE_ZG7LofXIsgxsagiL2JAn42ntrQ6dHWB7CU_pxmGZk4'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});
   
  }

  getArtista(termino:string){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCkACPpFPyxv1TvgYnnLNDaGfwFru1C4s-fxeLE_ZG7LofXIsgxsagiL2JAn42ntrQ6dHWB7CU_pxmGZk4'
    })

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers});
   
  
  }
}
