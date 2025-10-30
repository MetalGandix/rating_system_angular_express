import { Component, OnInit } from '@angular/core';
import { RatingService } from '../rating.service';

@Component({
  selector: 'app-view-ratings',
  templateUrl: './view-ratings.component.html',
  styleUrls: ['./view-ratings.component.css']
})
export class ViewRatingsComponent implements OnInit {

  ratings: any[] = [];
  selectedRating: any = null;
  newRatings: Rating[] = [];

  constructor(private ratingService: RatingService) {}

  ngOnInit(): void {
    this.getRatings();
  }

  getRatings() {
    this.ratingService.getAllRatings().subscribe({
      next: res => {
        if (res && res.data) {
          this.ratings = res.data;
          this.newRatings = [];

          this.ratings.forEach(x => {
            try {
              // x è già un oggetto JSON valido
              const questions =
                typeof x.questions === 'string'
                  ? JSON.parse(x.questions)
                  : x.questions || [];

              const newRating: Rating = {
                id: String(x.id),
                verbale: x.verbale || '',
                timestamp: x.timestamp || '',
                operatore: x.operatore || '',
                ditta: x.ditta || '',
                tipologiaAttivita: x.tipologiaAttivita || '',
                questions: questions,
                totalRating: Number(x.totalRating) || 0
              };

              this.newRatings.push(newRating);
            } catch (err) {
              console.error('Errore nel parsing del record', x.id, err);
            }
          });

          console.log('newRatings:', this.newRatings);
        }
      },
      error: err => console.error('Errore caricamento ratings:', err)
    });
  }

  showRatingDetails(rating: any): void {
    this.selectedRating = this.selectedRating === rating ? null : rating;
  }

  deleteRating(rating: Rating): void {
    this.ratingService.deleteRatingById(Number(rating.id)).subscribe({
      next: response => {
        console.log(response.message);
        this.newRatings = this.newRatings.filter(r => r.id !== rating.id);
      },
      error: err => console.error("Errore nell'eliminazione del rating:", err)
    });
  }

  downloadExcel(ratingId: string): void {
    this.ratingService.downloadRatingExcel(ratingId).subscribe(data => {
      const blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });
      const downloadURL = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadURL;
      link.download = 'ratings.xlsx';
      link.click();
    });
  }
}

export interface Rating {
  id: string;
  verbale: string;
  timestamp: string;
  operatore: string;
  ditta: string;
  tipologiaAttivita: string;
  questions: any[];
  totalRating: number;
}
