import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Wykonawca} from "./wykonawca.model";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WykonawcaService {

  private URL = 'http://localhost:3000/artists';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  pobierzWykonawcow(): Observable<Wykonawca[]> {
    return this.http.get<Wykonawca[]>(this.URL).pipe(catchError(this.handleError<Wykonawca[]>('pobierzWykonawcow', [])));
  }

  pobierzWykonawcowZKraju(kraj: string): Observable<Wykonawca[]> {
  return this.http.get<Wykonawca[]>(this.URL+"?country_like="+kraj).pipe(catchError(this.handleError<Wykonawca[]>('pobierzWykonawcowZKraju', [])));
}

  pobierzWykonawceODanymId(id: number): Observable<Wykonawca>{
    return this.http.get<Wykonawca>(this.URL+"/"+id).pipe(catchError(this.handleError<Wykonawca>('pobierzWykonawceODanymId')));
  }
  dodajWykonawce(wykonawca: Wykonawca): Observable<Wykonawca> {
    return this.http.post<Wykonawca>(this.URL, wykonawca, this.httpOptions).pipe(catchError(this.handleError<Wykonawca>('dodajWykonawce')));
  }
  zmienWykonawce(wykonawca: Wykonawca): Observable<Wykonawca> {
    return this.http.put<Wykonawca>(this.URL+"/"+wykonawca.id, wykonawca, this.httpOptions).pipe(catchError(this.handleError('zmienWykonawce', wykonawca)))
  }
  usunWykonawce(id: string): Observable<unknown> {
    return this.http.delete(this.URL+"/"+id, this.httpOptions).pipe(catchError(this.handleError('usunWykonawce')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation + ' failed' + error);
      return of(result as T);
    };
  }
}
