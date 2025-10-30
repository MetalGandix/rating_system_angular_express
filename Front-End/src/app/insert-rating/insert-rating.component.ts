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
  totalRatingPoints: number = 0;

  riferimentoRowSpan: { [key: string]: number } = {};

  questionsCAP1: RatingQuestion[] = [
    {
      id: 1,
      descrizione: 'Pulizia e manutenzione dei locali',
      peso: 10
    },
    {
      id: 2,
      descrizione: 'Sufficiente numero di bagni con antibagno',
      peso: 7
    },
    {
      id: 3,
      descrizione: 'Sufficiente numero di lavabi/lavamani dotati di acqua corrente calda e fredda',
      peso: 6
    },
    {
      id: 4,
      descrizione: 'Sufficiente numero di sistemi di igienizzazione e asciugatura su lavabi/lavamani',
      peso: 5
    },
    {
      id: 5,
      descrizione: 'Areazione naturale e/o artificiale dei locali',
      peso: 6
    },
    {
      id: 6,
      descrizione: 'Sistema di aerazione naturale o meccanico negli impianti sanitari',
      peso: 6
    },
    {
      id: 7,
      descrizione: 'Illuminazione dei locali',
      peso: 5
    },
    {
      id: 8,
      descrizione: 'Installazioni adeguate adibite a spogliatoio per il personale',
      peso: 6
    },
    {
      id: 9,
      descrizione: 'Prodotti per la pulizia e sostanze pericolose/non commestibili detenuti in modo confinato',
      peso: 3
    }
  ];

  questionsCAP2: RatingQuestion[] = [
    {
      id: 10,
      descrizione: 'Pavimenti in materiale resistente, facile da pulire e mantenuti in buone condizioni di manutenzione e pulizia',
      peso: 8
    },
    {
      id: 11,
      descrizione: "Pareti in materiale facile da pulire, fino ad un'altezza adeguata e mantenuti in buone condizioni di manutenzione e pulizia",
      peso: 8
    },
    {
      id: 12,
      descrizione: "Soffitti in materiale facile da pulire, che riduce l'accumulo di sporcizia e formazione di condensa e mantenuti in buone condizioni di manutenzione e pulizia",
      peso: 8
    },
    {
      id: 13,
      descrizione: "Finestre costruite in modo da evitare l’accumulo di sporcizia e provviste di reti anti-insetti (se apribili all'esterno)",
      peso: 8
    },
    {
      id: 14,
      descrizione: "Porte costruite in modo da evitare l’accumulo di sporcizia e provviste di reti anti-insetti (se apribili all'esterno)",
      peso: 8
    },
    {
      id: 15,
      descrizione: 'Superfici destinate alla manipolazione di alimenti in materiale resistente, facile da pulire e mantenute in buone condizioni di manutenzione e pulizia',
      peso: 8
    }
  ];

  questionsCAP5: RatingQuestion[] = [
    {
      id: 16,
      descrizione: 'Attrezzature mantenute in buone condizioni di pulizia e manutenzione e installate in modo da consentire un’adeguata pulizia',
      peso: 10
    },
    {
      id: 17,
      descrizione: "Attrezzature dispongono di dispositivi di controllo (frigoriferi, congelatori, abbattitori, ecc)",
      peso: 9
    }
  ];

  questionsCAP6: RatingQuestion[] = [
    {
      id: 18,
      descrizione: 'Rifiuti, sottoprodotti e scarti sono rimossi al più presto dai locali per evitare gli accumoli',
      peso: 8
    },
    {
      id: 19,
      descrizione: "Contenitori dei rifiuti chiudibili, in materiale facile da pulire e mantenuti in buone condizioni di pulizia",
      peso: 8
    },
    {
      id: 20,
      descrizione: "Disposizioni per il deposito e la rimozione di rifiuti, sottoprodotti e scarti",
      peso: 6
    }
  ];

  questionsCAP7: RatingQuestion[] = [
    {
      id: 21,
      descrizione: 'Disponibilità sufficiente di acqua potabile',
      peso: 10
    }
  ];

  questionsCAP8: RatingQuestion[] = [
    {
      id: 22,
      descrizione: 'Ogni addetto mantiene un comportamento idoneo all’attività svolta e indossa indumenti adeguati e puliti',
      peso: 10
    }
  ];

  questionsCAP9: RatingQuestion[] = [
    {
      id: 23,
      descrizione: 'Materie prime idonee e conservare in modo da evitare deterioramento e/o contaminazione',
      peso: 10
    },
    {
      id: 24,
      descrizione: 'Alimenti protetti da qualsiasi forma di contaminazione, in tutte le fasi di lavorazione',
      peso: 10
    },
    {
      id: 25,
      descrizione: 'Materie prime, semilavorati e prodotti finiti deperibili conservarti a temperatura controllata e nel rispetto della catena del freddo (frigorifero, congelatore, ghiaccio)',
      peso: 10
    }
  ];

  questionsCAP10: RatingQuestion[] = [
    {
      id: 26,
      descrizione: 'Materiali di imballaggio (M.O.C.A.) adeguatamente immagazzinati in modo da evitare contaminazioni',
      peso: 5
    }
  ];

  questionsCAP12: RatingQuestion[] = [
    {
      id: 27,
      descrizione: 'OSA e addetti alla manipolazione degli alimenti sono adeguatamente formati',
      peso: 6
    }
  ];

  questionEtichettaturaProdottiAlimentari: RatingQuestion[] = [
    {
      id: 28,
      descrizione: 'Etichettatura dei prodotti alimentari confezionati',
      peso: 8
    },
    {
      id: 29,
      descrizione: 'Etichettatura/identificazione con cartello/registro ingredienti dei prodotti alimentari preincartati, frazionati e sfusi (compresi quelli preparati in loco) ',
      peso: 8
    },
    {
      id: 30,
      descrizione: 'Etichettatura/identificazione con cartello della pasta fresca allo stato sfuso',
      peso: 8
    },
    {
      id: 31,
      descrizione: 'Etichettatura/identificazione con cartello della carne fresca e dei prodotti ittici',
      peso: 8
    },
    {
      id: 32,
      descrizione: 'Presenza di informazioni relative agli allergeni',
      peso: 7
    }
  ];

  questionPrincipiSistemaHACCP: RatingQuestion[] = [
    {
      id: 33,
      descrizione: 'Diagramma di flusso',
      peso: 4
    },
    {
      id: 34,
      descrizione: 'Analisi dei pericoli e identificazione CCP',
      peso: 6
    },
    {
      id: 35,
      descrizione: 'Definizione  e registrazione procedure di monitoraggio e limiti critici',
      peso: 6
    },
    {
      id: 36,
      descrizione: 'Definizione e registrazione azioni correttive',
      peso: 6
    },
    {
      id: 37,
      descrizione: 'Definizione procedure di verifica e referti analitici',
      peso: 6
    }
  ];

  questionSistemaDiAutocontrollo: RatingQuestion[] = [
    {
      id: 38,
      descrizione: 'Accettazione materie prime e ingredienti',
      peso: 7
    },
    {
      id: 39,
      descrizione: 'Pulizia e disinfezione',
      peso: 7
    },
    {
      id: 40,
      descrizione: 'Controllo animali infestanti',
      peso: 7
    },
    {
      id: 41,
      descrizione: 'Controllo potabilità dell’acqua',
      peso: 7
    },
    {
      id: 42,
      descrizione: 'Manutenzione strutture ed impianti',
      peso: 7
    },
    {
      id: 43,
      descrizione: 'Gestione rifiuti',
      peso: 7
    },
    {
      id: 44,
      descrizione: 'Formazione del personale',
      peso: 7
    },
    {
      id: 45,
      descrizione: 'Gestione M.O.C.A.',
      peso: 7
    },
    {
      id: 46,
      descrizione: 'Sistema di rintracciabilità',
      peso: 7
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

  logQuestionWeight(question: RatingQuestion) {
    console.log(`Selected answer for question ID: ${question.id}. Question weight: ${question.peso}`);
  }

  shouldDisplayRiferimentoCell(index: number, questions: RatingQuestion[]): boolean {
    if (index === 0) return true;
    return questions[index].descrizione !== questions[index - 1].descrizione;
  }

  calculatePoints(): number{
    let total = 0;

    let totalPesoCap1: number = 0
    let totalPesoCap2: number = 0
    let totalPesoCap5: number = 0
    let totalPesoCap6: number = 0
    let totalPesoCap7: number = 0
    let totalPesoCap8: number = 0
    let totalPesoCap9: number = 0
    let totalPesoCap10: number = 0
    let totalPesoCap12: number = 0
    let totalPesoCapEtichettaturaProdottiAlimentari: number = 0
    let totalPesoCapPrincipiSistemaHACCP: number = 0
    let totalPesoCapSistemaDiAutocontrollo: number = 0

    this.questionsCAP1.forEach(x => {
      total += x.peso * (x.risposta?.moltiplicatore ?? 0.1);
      totalPesoCap1 += x.peso * (x.risposta?.moltiplicatore ?? 0.1);
    });
    console.log("Peso CAP1", totalPesoCap1)
    this.questionsCAP2.forEach(x => {
      total += x.peso * (x.risposta?.moltiplicatore ?? 0.1);
      totalPesoCap2 += x.peso * (x.risposta?.moltiplicatore ?? 0.1);
    });
    console.log("Peso CAP2", totalPesoCap2)
    this.questionsCAP5.forEach(x => {
      total += x.peso * (x.risposta?.moltiplicatore ?? 0.1);
      totalPesoCap5 += x.peso * (x.risposta?.moltiplicatore ?? 0.1);
    });
    console.log("Peso CAP5", totalPesoCap5)
    this.questionsCAP6.forEach(x => {
      total += x.peso * (x.risposta?.moltiplicatore ?? 0.1);
      totalPesoCap6 += x.peso * (x.risposta?.moltiplicatore ?? 0.1);
    });
    console.log("Peso CAP6", totalPesoCap6)
    this.questionsCAP7.forEach(x => {
      total += x.peso * (x.risposta?.moltiplicatore ?? 0.1);
      totalPesoCap7 += x.peso * (x.risposta?.moltiplicatore ?? 0.1);
    });
    console.log("Peso CAP7", totalPesoCap7)
    this.questionsCAP8.forEach(x => {
      total += x.peso * (x.risposta?.moltiplicatore ?? 0.1);
      totalPesoCap8 += x.peso * (x.risposta?.moltiplicatore ?? 0.1);
    });
    console.log("Peso CAP8", totalPesoCap8)
    this.questionsCAP9.forEach(x => {
      total += x.peso * (x.risposta?.moltiplicatore ?? 0.1);
      totalPesoCap9 += x.peso * (x.risposta?.moltiplicatore ?? 0.1);
    });
    console.log("Peso CAP9", totalPesoCap9)
    this.questionsCAP10.forEach(x => {
      total += x.peso * (x.risposta?.moltiplicatore ?? 0.1);
      totalPesoCap10 += x.peso * (x.risposta?.moltiplicatore ?? 0.1);
    });
    console.log("Peso CAP10", totalPesoCap10)
    this.questionsCAP12.forEach(x => {
      total += x.peso * (x.risposta?.moltiplicatore ?? 0.1);
      totalPesoCap12 += x.peso * (x.risposta?.moltiplicatore ?? 0.1);
    });
    console.log("Peso CAP12", totalPesoCap12)
    this.questionEtichettaturaProdottiAlimentari.forEach(x => {
      total += x.peso * (x.risposta?.moltiplicatore ?? 0.1);
      totalPesoCapEtichettaturaProdottiAlimentari += x.peso * (x.risposta?.moltiplicatore ?? 0.1);
    });
    console.log("Peso CAPEtichettaturaProdottiAlimentari", totalPesoCapEtichettaturaProdottiAlimentari)
    this.questionPrincipiSistemaHACCP.forEach(x => {
      total += x.peso * (x.risposta?.moltiplicatore ?? 0.1);
      totalPesoCapPrincipiSistemaHACCP += x.peso * (x.risposta?.moltiplicatore ?? 0.1);
    });
    console.log("Peso CAPHACCP", totalPesoCapPrincipiSistemaHACCP)
    this.questionSistemaDiAutocontrollo.forEach(x => {
      total += x.peso * (x.risposta?.moltiplicatore ?? 0.1);
      totalPesoCapSistemaDiAutocontrollo += x.peso * (x.risposta?.moltiplicatore ?? 0.1);
    })
    console.log("Peso CAPSistemaAutocontrollo", totalPesoCapSistemaDiAutocontrollo)

    this.totalRatingPoints = Math.round(total * 10) / 10;;
    
    return this.totalRatingPoints;
  }

  submitRatings() {
    let selectedQuestions: RatingQuestion[] = [];

    this.questionsCAP1.forEach(x => {
      selectedQuestions.push(x);
    });

    this.questionsCAP2.forEach(x => {
      selectedQuestions.push(x)
    });

    this.questionsCAP5.forEach(x => {
      selectedQuestions.push(x)
    });

    this.questionsCAP6.forEach(x => {
      selectedQuestions.push(x)
    });

    this.questionsCAP7.forEach(x => {
      selectedQuestions.push(x)
    });

    this.questionsCAP8.forEach(x => {
      selectedQuestions.push(x)
    });

    this.questionsCAP9.forEach(x => {
      selectedQuestions.push(x)
    });

    this.questionsCAP10.forEach(x => {
      selectedQuestions.push(x)
    });

    this.questionsCAP12.forEach(x => {
      selectedQuestions.push(x)
    });

    this.questionEtichettaturaProdottiAlimentari.forEach(x => {
      selectedQuestions.push(x)
    });

    this.questionPrincipiSistemaHACCP.forEach(x => {
      selectedQuestions.push(x)
    });

    this.questionSistemaDiAutocontrollo.forEach(x => {
      selectedQuestions.push(x)
    })

    this.totalRatingPoints = this.calculatePoints();

    const ratingsToSend = {
      verbale: this.verbale,
      data: this.data,
      operatore: this.operatore,
      ditta: this.ditta,
      tipologiaAttivita: this.tipologiaAttivita,
      questions: selectedQuestions,
      totalRating: this.totalRatingPoints
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

  ratingMultipliers: RatingMultiplier[] = [
    {
      testo: 'Inadeguato/N.C.',
      moltiplicatore: 0.1,
    },
    {
      testo: 'Scarso',
      moltiplicatore: 0.2,
    },
    {
      testo: 'Discreto',
      moltiplicatore: 0.3,
    },
    {
      testo: 'Buono',
      moltiplicatore: 0.4,
    },
    {
      testo: 'Ottimo',
      moltiplicatore: 0.5,
    }
  ];

  getColorForRating(rating: number): string {
    if (rating >= 33.4 && rating < 100.2) {
      return 'red';
    }
    if (rating >= 100.2 && rating < 133.6) {
      return 'orange'; // Un'opzione per arancione chiaro
    }
    if (rating >= 133.6 && rating <= 167) {
      return 'green';
    }
    return 'black'; // Colore di default se nessuna condizione è soddisfatta
  }

  //33.4 66.8 100.2 133.6 167

}

export interface RatingMultiplier {
  testo: string;
  moltiplicatore: number;
}

export interface RatingQuestion {
  id: number;
  descrizione: string;
  risposta?: RatingMultiplier;
  peso: number;
}


