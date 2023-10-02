import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-rating',
  templateUrl: './new-rating.component.html',
  styleUrls: ['./new-rating.component.css']
})
export class NewRatingComponent implements OnInit {

  isTrasporto: boolean = false;
  isCarne: boolean = false;
  isLatte: boolean = false;
  choosen: boolean = false;

  riferimentoRowSpan: {[key: string]: number} = {};

  questionsCarne: RatingQuestion[] = [
    // Qui puoi inserire le domande specifiche per la carne
  ];

  questionsLatte: RatingQuestion[] = [
    // Qui puoi inserire le domande specifiche per il latte
  ];

  questionsTrasporto: RatingQuestion[] = [
    {
      id: 1,
      riferimento: 'Reg 852/04, All.II, Cap.IV, Punto 1',
      requisiti: 'Puliti e progettati per consentire una corretta prassi igienica ed in buone condizioni di manutenzione'
    },
    {
      id: 2,
      riferimento: 'Reg 852/04, All.II, Cap.IV, Punto 1',
      requisiti: 'Puliti in buone condizioni di manutenzione, ma con materiale improprio e progettati in modo impreciso per assicurare una corretta prassi igienica ( dimensioni e accessi e linee  di lavorazione, posizionemaneo finestre, bagni, spogliatoi, frigoriferi ).'
    },
    {
      id: 3,
      riferimento: 'Reg 852/04, All.II, Cap.IV, Punto 2',
      requisiti: 'Non puliti, con materiale improprio, presenza di muffa, condensa, accumulo di sporcizia alle finestre, anche se progettati per consentire una corretta prassi igienica, ma in buone condizioni di manutenzione.'
    },
    {
      id: 4,
      riferimento: 'Reg 852/04, All.II, Cap.IV, Punto 2',
      requisiti: 'in cattive condizioni di manutenzione di pavimenti/pareti/soffitti/frigoriferi/attrezzature, anche se progettati per consentire una corretta prassi igienica'
    },
    {
      id: 5,
      riferimento: 'Reg 852/04, All.II, Cap.IV, Punto 3',
      requisiti: 'in cattive condizioni di manutenzione di pavimenti/pareti/soffitti/frigoriferi/attrezzature, anche se progettati in modo impreciso per consentire una corretta prassi igienica'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.calculateRowSpans(this.questionsTrasporto);
  }

  calculateRowSpans(questions: RatingQuestion[]) {
    let currentRiferimento = '';
    let count = 0;
  
    questions.forEach((question, index) => {
      if (currentRiferimento !== question.riferimento) {
        if (count > 0) {
          this.riferimentoRowSpan[currentRiferimento] = count;
        }
        currentRiferimento = question.riferimento;
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
    return questions[index].riferimento !== questions[index - 1].riferimento;
  }

  trasportoTrue() {
    this.isTrasporto = true;
    this.choosen = true;
  }

  carneTrue() {
    this.isCarne = true;
    this.choosen = true;
  }

  latteTrue() {
    this.isLatte = true;
    this.choosen = true;
  }

  submitRatings() {
    // Qui puoi gestire l'invio delle risposte
    if (this.isCarne) {
      console.log(this.questionsCarne);
    } else if (this.isLatte) {
      console.log(this.questionsLatte);
    } else if (this.isTrasporto) {
      console.log(this.questionsTrasporto);
    }
  }
  
}

export interface RatingQuestion {
  id: number;
  riferimento: string;
  requisiti: string;
  risposta?: string | number;
}
