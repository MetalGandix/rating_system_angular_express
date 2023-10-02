import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
