import { Component } from '@angular/core';
import { RatingService } from '../rating.service';

@Component({
  selector: 'app-insert-rating',
  templateUrl: './insert-rating.component.html',
  styleUrls: ['./insert-rating.component.css']
})
export class InsertRatingComponent {

  choosen: boolean = false;

  riferimentoRowSpan: { [key: string]: number } = {};

  questions: RatingQuestion[] = [
    {
      id: 1,
      descrizione: 'Pulizia e manutenzione dei locali',
    },
    {
      id: 2,
      descrizione: 'Sufficiente numero di bagni con antibagno'
    }
  ];

  constructor(private ratingService: RatingService) { }

  ngOnInit() {
    this.calculateRowSpans(this.questions);
  }

  calculateRowSpans(questions: RatingQuestion[]) {
    let currentRiferimento = '';
    let count = 0;

    questions.forEach((question, index) => {
      if (currentRiferimento !== question.descrizione) {
        if (count > 0) {
          this.riferimentoRowSpan[currentRiferimento] = count;
        }
        currentRiferimento = question.descrizione;
        count = 1;
      } else {
        count++;
      }

      // Handle the last group
      if (index === questions.length - 1) {
        this.riferimentoRowSpan[currentRiferimento] = count;
      }
    });
  }

  shouldDisplayRiferimentoCell(index: number, questions: RatingQuestion[]): boolean {
    if (index === 0) return true;
    return questions[index].descrizione !== questions[index - 1].descrizione;
  }

  submitRatings() {
    let selectedQuestions: RatingQuestion[] = [];
    selectedQuestions = this.questions;

    const ratingsToSend = {
      questions: selectedQuestions
    };

    console.log(ratingsToSend);  // Questo ti mostrerà l'intero oggetto contenente la categoria e le domande

    this.ratingService.saveRatings(ratingsToSend).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => {
        console.log(error);
      }
    });
  }

}

export interface RatingQuestion {
  id: number;
  descrizione: string;
  risposta?: string | number;
}

