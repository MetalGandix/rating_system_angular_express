import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Importa HttpHeaders
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  saveRatings(ratings: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/saveRating`, ratings);
  }

  getAllRatings(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getAllRatings`);
  }

  getAllRatingsResults(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getRatingResults`);
  }

  downloadRatingExcel(ratingId: string): Observable<Blob> { // Nuova funzione
    const headers = new HttpHeaders().append('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    return this.http.get(`${this.apiUrl}/downloadRatings?ratingId=${ratingId}`, { headers: headers, responseType: 'blob' });
  }

}
