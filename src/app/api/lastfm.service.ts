import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_KEYS} from "../../API_KEYS";

@Injectable({
  providedIn: 'root'
})
export class LastfmService {

  private adres = 'http://ws.audioscrobbler.com/2.0/?format=json&api_key=' + API_KEYS.LASTFM_API_KEY;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  informacjeWykonawca (nazwa: any) {
    return this.http.get(this.adres + "&method=artist.getinfo&artist=" + nazwa);
  }

  informacjeAlbum (wykonawca: any, nazwa: any) {
    return this.http.get(this.adres + "&method=album.getinfo&artist=" + wykonawca + "&album=" + nazwa);
  }


}


