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

  downloadExcel(ratingId: string): void {
    this.ratingService.downloadRatingExcel(ratingId).subscribe(data => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const downloadURL = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadURL;
      link.download = 'ratings.xlsx';
      link.click();
    });
  }
}
