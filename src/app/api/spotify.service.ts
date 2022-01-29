import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_KEYS} from "../../API_KEYS";


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private adres = 'https://api.spotify.com/v1/';
  constructor(private http: HttpClient) {
    this.odczytajToken();
  }
  token: any;
  odczytajToken() {
    const adres2 = 'https://accounts.spotify.com/api/token';
    const body = 'grant_type=client_credentials';
    const id_and_secret = btoa(API_KEYS.SPOTIFY_CLIENT_ID + ":" + API_KEYS.SPOTIFY_CLIENT_SECRET)
    const httpOptionsToken = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded',
         'Authorization': 'Basic '.concat(id_and_secret) })
    }
    this.http.post(adres2, body, httpOptionsToken).subscribe(
      data => {
        this.token = (<any>data).access_token;
      }, error => {
        console.log(error);
        alert("Błąd przy odczytywaniu tokena ze Spotify, zobacz konsole")
      }
    )
  }


  szukajWykonawca (nazwa: any) {
    return this.http.get(this.adres + "search?type=artist&q=" + nazwa, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token })
    })
  }

  
}


