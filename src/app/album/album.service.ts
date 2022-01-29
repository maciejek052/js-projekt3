import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {Album} from "./album.model";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private URL = 'http://localhost:3000/albums';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  pobierzAlbumy(): Observable<Album[]> {
    return this.http.get<Album[]>(this.URL).pipe(catchError(this.handleError<Album[]>('pobierzAlbumy', [])));
  }
  pobierzAlbumODanymId(id: number): Observable<Album>{
    return this.http.get<Album>(this.URL+"/"+id).pipe(catchError(this.handleError<Album>('pobierzAlbumODanymId')));
  }
  dodajAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(this.URL, album, this.httpOptions).pipe(catchError(this.handleError<Album>('dodajAlbum')));
  }
  zmienAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(this.URL+"/"+album.id, album, this.httpOptions).pipe(catchError(this.handleError('zmienAlbum', album)))
  }
  usunAlbum(id: string): Observable<unknown> {
    return this.http.delete(this.URL+"/"+id, this.httpOptions).pipe(catchError(this.handleError('usunAlbum')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation + ' failed' + error);
      return of(result as T);
    };
  }
}

