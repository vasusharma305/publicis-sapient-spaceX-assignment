import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {  Launch } from './hero';


@Injectable({ providedIn: 'root' })
export class LaunchService {

  private heroesUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET Launch from the server */
  getLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched Launches')),
        catchError(this.handleError<Launch[]>('getLaunches', []))
      );
  }
  updateLaunches(data) {
    switch (data.field) {
      case 'year':
        return this.http.get<Launch[]>('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=' + data.value )
          .pipe(
            tap(_ => this.log('fetched Launches')),
            catchError(this.handleError<Launch[]>('getLaunches', []))
          );
      case 'land':
        return this.http.get<Launch[]>('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=' + data.value)
          .pipe(
            tap(_ => this.log('fetched Launches')),
            catchError(this.handleError<Launch[]>('getLaunches', []))
          );
      case 'launch':
        return this.http.get<Launch[]>('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=' + data.value + '&land_success=' + data.value)
          .pipe(
            tap(_ => this.log('fetched Launches')),
            catchError(this.handleError<Launch[]>('getLaunches', []))
          );
      default: return this.http.get<Launch[]>(this.heroesUrl)
        .pipe(
          tap(_ => this.log('fetched Launches')),
          catchError(this.handleError<Launch[]>('getLaunches', []))
        );
    }
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`HeroService: ${message}`);
  }
}
