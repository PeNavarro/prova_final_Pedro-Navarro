import { Injectable } from '@angular/core';
import { Car } from './car'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private carsUrl = 'http://localhost:3000/cars';

  constructor(
    private http: HttpClient,
  ){ }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl)
    .pipe(
      catchError(this.handleError<Car[]>('getCars', [])),
      tap(_ => console.log('fetched car'))
    );
  }

  getCar(id: number): Observable<Car> {
    const url = `${this.carsUrl}/${id}`;
    return this.http.get<Car>(url).pipe(
      tap(_ => console.log(`fetched car id=${id}`)),
      catchError(this.handleError<Car>(`getCar id=${id}`))
    );
  }

  updateCar(car: Car): Observable<any> {
    return this.http.put(this.carsUrl + "/" + car.id, car, this.httpOptions).pipe(
      tap(_ => console.log(`updated car id=${car.id}`)),
      catchError(this.handleError<any>('updateCar'))
    );
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.carsUrl, car, this.httpOptions).pipe(
      tap((newCar: Car) => console.log(`added car id=${newCar.id}`)),
      catchError(this.handleError<Car>('addCar'))
    );
  }

  deleteCar(id: number): Observable<Car> {
    const url = `${this.carsUrl}/${id}`;
  
    return this.http.delete<Car>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted car id=${id}`)),
      catchError(this.handleError<Car>('deleteCar'))
    );
  }
  
  searchCars(term: string): Observable<Car[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Car[]>(`${this.carsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         console.log(`found car matching "${term}"`) :
         console.log(`no car matching "${term}"`)),
      catchError(this.handleError<Car[]>('searchCar', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error);
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}