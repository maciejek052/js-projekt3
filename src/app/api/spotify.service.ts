import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_KEYS} from "../../API_KEYS";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private adres = 'https://api.spotify.com/v1/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + API_KEYS.SPOTIFY_API_KEY })
  }

  constructor(private http: HttpClient) { }

  szukajWykonawca (nazwa: any) {
    return this.http.get(this.adres + "search?type=artist&q=" + nazwa, this.httpOptions);
  }


}


