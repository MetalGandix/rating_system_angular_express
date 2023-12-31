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
    this.ratingService.getAllRatings().subscribe({
      next: data => {
        if (data && data.data) {
          this.ratings = data.data;
  
          // Itera attraverso ogni elemento di this.ratings
          this.ratings.forEach(x => {
            // Analizza l'elemento corrente come JSON
            let currentRating = JSON.parse(x.data);
  
            // Crea un nuovo oggetto di tipo Rating utilizzando i valori estratti da currentRating
            let newRating: Rating = {
              verbale: currentRating?.verbale, // Usa l'operatore || per fornire un valore di default se verbale è undefined
              timestamp: x?.timestamp,
              id: x?.id,
              operatore: currentRating?.operatore,
              ditta: currentRating?.ditta,
              tipologiaAttivita: currentRating?.tipologiaAttivita,
              questions: currentRating?.questions,
              totalRating: currentRating.totalRating // Assumendo che tu non stia ottenendo il totalRating dal tuo servizio, ma lo stia calcolando o impostando in seguito
            };
  
            // Aggiungi il nuovo oggetto Rating all'array newRatings
            this.newRatings?.push(newRating);
  
            console.log(this.newRatings)
          });
        }
      },
      error: error => console.error(error)
    });
  }
  

  showRatingDetails(rating: any): void {
    this.selectedRating = this.selectedRating === rating ? null : rating;
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