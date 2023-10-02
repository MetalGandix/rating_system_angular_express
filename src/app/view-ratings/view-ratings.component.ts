import { Component, OnInit } from '@angular/core';
import { RatingService } from '../rating.service';

@Component({
  selector: 'app-view-ratings',
  templateUrl: './view-ratings.component.html',
  styleUrls: ['./view-ratings.component.css']
})
export class ViewRatingsComponent implements OnInit {

  ratings: any[] = [];

  constructor(private ratingService: RatingService) { }

  ngOnInit(): void {
    this.ratingService.getAllRatings().subscribe({
      next: data => this.ratings = data.data,
      error: error => console.error(error)
    });
  }

}
