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
  verbale?: string;
  data?: Date;
  operatore?: string;
  ditta?: string;
  tipologiaAttivita?: string;
  selectedQuestions?: any[] = []; // Initialize or get from a service
  totalRatingPoints?: number;
  jsonObjectRating?: Rating;

  newRatings?: Rating[] = [];

  constructor(private ratingService: RatingService) { }

  ngOnInit(): void {
    this.getRatings();
  }

  getRatings() {
    this.ratingService.getAllRatings().subscribe({
      next: data => {
        if (data && data.data) {
          this.ratings = data.data;
  
          // Itera attraverso ogni elemento di this.ratings
          this.ratings.forEach(x => {
            // Crea un nuovo oggetto di tipo Rating utilizzando i valori estratti da x
            let newRating: Rating = {
              verbale: x?.verbale,
              timestamp: x?.timestamp,
              id: x?.id,
              operatore: x?.operatore,
              ditta: x?.ditta,
              tipologiaAttivita: x?.tipologiaAttivita,
              questions: JSON.parse(x?.questions), // Analizza questions come JSON
              totalRating: x.totalRating // Assumendo che tu non stia ottenendo il totalRating dal tuo servizio, ma lo stia calcolando o impostando in seguito
            };
  
            // Aggiungi il nuovo oggetto Rating all'array newRatings
            this.newRatings?.push(newRating);
  
            console.log(this.newRatings);
          });
        }
      },
      error: error => console.error(error)
    });
  }
  


  showRatingDetails(rating: any): void {
    this.selectedRating = this.selectedRating === rating ? null : rating;
  }

  deleteRating(rating: Rating): void {
    this.ratingService.deleteRatingById(Number(rating.id)).subscribe({
      next: response => {
        console.log(response.message);
        // Remove the rating from the ratings array
        this.ratings = this.ratings.filter(r => r.id !== rating.id);
        // Remove the rating from the newRatings array
        if (this.newRatings) {
          this.newRatings = this.newRatings.filter(r => r.id !== rating.id);
        }
      },
      error: err => {
        console.error("Errore nell'eliminazione del rating:", err);
      }
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

   getColorForRating(rating: number): string {
    if (rating >= 31.2 && rating < 62.4) {
      return 'red';
    }
    if (rating >= 62.4 && rating < 124.8) {
      return 'orange'; // Un'opzione per arancione chiaro
    }
    if (rating >= 124.8) {
      return 'green';
    }
    return 'black'; // Colore di default se nessuna condizione è soddisfatta
  }
}

export interface Rating {
  id: string;
  verbale: string;
  timestamp: string;
  operatore: string;
  ditta: string;
  tipologiaAttivita: string;
  questions: any[]; // Adjust this type if you have a more specific structure for questions
  totalRating: number;
}