import { Component } from '@angular/core';
import { RatingService } from '../rating.service';

@Component({
  selector: 'app-insert-rating',
  templateUrl: './insert-rating.component.html',
  styleUrls: ['./insert-rating.component.css']
})
export class InsertRatingComponent {

  choosen: boolean = false;

  today = new Date().toISOString().split('T')[0];

  verbale: string = '';
  data: string = this.today;
  operatore: string = '';
  ditta: string = '';
  tipologiaAttivita: string = '';

  riferimentoRowSpan: { [key: string]: number } = {};

  questionsCAP1: RatingQuestion[] = [
    {
      id: 1,
      descrizione: 'Pulizia e manutenzione dei locali',
    },
    {
      id: 2,
      descrizione: 'Sufficiente numero di bagni con antibagno'
    },
    {
      id: 3,
      descrizione: 'Sufficiente numero di lavabi/lavamani dotati di acqua corrente calda e fredda'
    },
    {
      id: 4,
      descrizione: 'Sufficiente numero di sistemi di igienizzazione e asciugatura su lavabi/lavamani'
    },
    {
      id: 5,
      descrizione: 'Areazione naturale e/o artificiale dei locali'
    },
    {
      id: 6,
      descrizione: 'Sistema di aerazione naturale o meccanico negli impianti sanitari'
    },
    {
      id: 7,
      descrizione: 'Illuminazione dei locali'
    },
    {
      id: 8,
      descrizione: 'Installazioni adeguate adibite a spogliatoio per il personale'
    },
    {
      id: 9,
      descrizione: 'Prodotti per la pulizia e sostanze pericolose/non commestibili detenuti in modo confinato'
    }
  ];

  questionsCAP2: RatingQuestion[] = [
    {
      id: 10,
      descrizione: 'Pavimenti in materiale resistente, facile da pulire e mantenuti in buone condizioni di manutenzione e pulizia',
    },
    {
      id: 11,
      descrizione: "Pareti in materiale facile da pulire, fino ad un'altezza adeguata e mantenuti in buone condizioni di manutenzione e pulizia"
    },
    {
      id: 12,
      descrizione: "Soffitti in materiale facile da pulire, che riduce l'accumulo di sporcizia e formazione di condensa e mantenuti in buone condizioni di manutenzione e pulizia"
    },
    {
      id: 13,
      descrizione: "Finestre costruite in modo da evitare l’accumulo di sporcizia e provviste di reti anti-insetti (se apribili all'esterno)"
    },
    {
      id: 14,
      descrizione: "Porte costruite in modo da evitare l’accumulo di sporcizia e provviste di reti anti-insetti (se apribili all'esterno)"
    },
    {
      id: 15,
      descrizione: 'Superfici destinate alla manipolazione di alimenti in materiale resistente, facile da pulire e mantenute in buone condizioni di manutenzione e pulizia'
    }
  ];

  questionsCAP5: RatingQuestion[] = [
    {
      id: 16,
      descrizione: 'Attrezzature mantenute in buone condizioni di pulizia e manutenzione e installate in modo da consentire un’adeguata pulizia',
    },
    {
      id: 17,
      descrizione: "Attrezzature dispongono di dispositivi di controllo (frigoriferi, congelatori, abbattitori, ecc)"
    }
  ];

  questionsCAP6: RatingQuestion[] = [
    {
      id: 18,
      descrizione: 'Rifiuti, sottoprodotti e scarti sono rimossi al più presto dai locali per evitare gli accumoli',
    },
    {
      id: 19,
      descrizione: "Contenitori dei rifiuti chiudibili, in materiale facile da pulire e mantenuti in buone condizioni di pulizia"
    },
    {
      id: 20,
      descrizione: "Disposizioni per il deposito e la rimozione di rifiuti, sottoprodotti e scarti"
    }
  ];

  questionsCAP7: RatingQuestion[] = [
    {
      id: 21,
      descrizione: 'Disponibilità sufficiente di acqua potabile',
    }
  ];
  
  questionsCAP8: RatingQuestion[] = [
    {
      id: 22,
      descrizione: 'Ogni addetto mantiene un comportamento idoneo all’attività svolta e indossa indumenti adeguati e puliti',
    }
  ];

  questionsCAP9: RatingQuestion[] = [
    {
      id: 23,
      descrizione: 'Materie prime idonee e conservare in modo da evitare deterioramento e/o contaminazione',
    },
    {
      id: 24,
      descrizione: 'Alimenti protetti da qualsiasi forma di contaminazione, in tutte le fasi di lavorazione',
    },
    {
      id: 25,
      descrizione: 'Materie prime, semilavorati e prodotti finiti deperibili conservarti a temperatura controllata e nel rispetto della catena del freddo (frigorifero, congelatore, ghiaccio)',
    }
  ];

  questionsCAP10: RatingQuestion[] = [
    {
      id: 26,
      descrizione: 'Materiali di imballaggio (M.O.C.A.) adeguatamente immagazzinati in modo da evitare contaminazioni',
    }
  ];

  questionsCAP11: RatingQuestion[] = [
    {
      id: 27,
      descrizione: 'OSA e addetti alla manipolazione degli alimenti sono adeguatamente formati',
    }
  ];

  questionEtichettaturaProdottiAlimentari: RatingQuestion[] = [
    {
      id: 28,
      descrizione: 'Etichettatura dei prodotti alimentari confezionati',
    },
    {
      id: 29,
      descrizione: 'Etichettatura/identificazione con cartello/registro ingredienti dei prodotti alimentari preincartati, frazionati e sfusi (compresi quelli preparati in loco) ',
    },
    {
      id: 30,
      descrizione: 'Etichettatura/identificazione con cartello della pasta fresca allo stato sfuso',
    },    
    {
      id: 31,
      descrizione: 'Etichettatura/identificazione con cartello della carne fresca e dei prodotti ittici',
    },
    {
      id: 32,
      descrizione: 'Presenza di informazioni relative agli allergeni',
    }
  ];

  questionPrincipiSistemaHACCP: RatingQuestion[] = [
    {
      id: 33,
      descrizione: 'Diagramma di flusso',
    },
    {
      id: 34,
      descrizione: 'Analisi dei pericoli e identificazione CCP',
    },
    {
      id: 35,
      descrizione: 'Definizione  e registrazione procedure di monitoraggio e limiti critici',
    },    
    {
      id: 36,
      descrizione: 'Definizione e registrazione azioni correttive',
    },
    {
      id: 37,
      descrizione: 'Definizione procedure di verifica e referti analitici',
    }
  ];

  questionSistemaDiAutocontrollo: RatingQuestion[] = [
    {
      id: 38,
      descrizione: 'Accettazione materie prime e ingredienti',
    },
    {
      id: 39,
      descrizione: 'Pulizia e disinfezione',
    },
    {
      id: 40,
      descrizione: 'Controllo animali infestanti',
    },    
    {
      id: 41,
      descrizione: 'Controllo potabilità dell’acqua',
    },
    {
      id: 42,
      descrizione: 'Manutenzione strutture ed impianti',
    },
    {
      id: 43,
      descrizione: 'Gestione rifiuti',
    },
    {
      id: 44,
      descrizione: 'Formazione del personale',
    },
    {
      id: 45,
      descrizione: 'Gestione M.O.C.A.',
    },
    {
      id: 46,
      descrizione: 'Sistema di rintracciabilità',
    }
  ];


  constructor(private ratingService: RatingService) { }

  ngOnInit() {
    this.calculateRowSpans(this.questionsCAP1);
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

    this.questionsCAP1.forEach(x =>{
      selectedQuestions.push(x)
    });

    this.questionsCAP2.forEach(x =>{
      selectedQuestions.push(x)
    });

    this.questionsCAP5.forEach(x =>{
      selectedQuestions.push(x)
    });

    this.questionsCAP6.forEach(x =>{
      selectedQuestions.push(x)
    });

    this.questionsCAP7.forEach(x =>{
      selectedQuestions.push(x)
    });

    this.questionsCAP8.forEach(x =>{
      selectedQuestions.push(x)
    });

    this.questionsCAP9.forEach(x =>{
      selectedQuestions.push(x)
    });

    this.questionsCAP10.forEach(x =>{
      selectedQuestions.push(x)
    });

    this.questionsCAP11.forEach(x =>{
      selectedQuestions.push(x)
    });

    this.questionEtichettaturaProdottiAlimentari.forEach(x =>{
      selectedQuestions.push(x)
    });

    this.questionPrincipiSistemaHACCP.forEach(x =>{
      selectedQuestions.push(x)
    });

    this.questionSistemaDiAutocontrollo.forEach(x => {
      selectedQuestions.push(x)
    })


    const ratingsToSend = {
      verbale: this.verbale,
      data: this.data,
      operatore: this.operatore,
      ditta: this.ditta,
      tipologiaAttivita: this.tipologiaAttivita,
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

