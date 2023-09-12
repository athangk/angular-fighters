import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Fighter } from '../interfaces/fighters.interfaces';

@Injectable({
  providedIn: 'root',
})
export class FightersService {
  private fightersURL = 'api/fighters';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  addFighter(fighter: Fighter): Observable<Fighter> {
    return this.http
      .post<Fighter>(this.fightersURL, fighter, this.httpOptions)
      .pipe(
        tap((fighter: Fighter) => this.log(`add fighter  ${fighter.id}`)),
        catchError(this.handleError<Fighter>('addFighter'))
      );
  }

  getFighters(): Observable<Fighter[]> {
    return this.http.get<Fighter[]>(this.fightersURL).pipe(
      tap((_) => this.log('get all fighters')),
      catchError(this.handleError<Fighter[]>('getFighters', []))
    );
  }

  getFighter(id: number): Observable<Fighter> {
    const url = `${this.fightersURL}/${id}`;
    return this.http.get<Fighter>(url).pipe(
      tap((_) => this.log(`get fighter ${id}`)),
      catchError(this.handleError<Fighter>(`getFighter ${id}`))
    );
  }

  private log(message: string) {
    console.log(`fightersService: ${message}`);
  }
}
