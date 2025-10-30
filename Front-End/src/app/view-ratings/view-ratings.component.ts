import { Component, OnInit } from '@angular/core';
import { RatingService } from '../rating.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-ratings',
  templateUrl: './view-ratings.component.html',
  styleUrls: ['./view-ratings.component.css']
})
export class ViewRatingsComponent implements OnInit {

  ratings: any[] = [];
  newRatings: Rating[] = [];
  selectedRating: Rating | null = null;

  searchTerm: string = '';

  // --- PAGINAZIONE ---
  currentPage = 1;
  itemsPerPage = 10;

  constructor(private ratingService: RatingService) { }

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
        }
      },
      error: err => console.error('Errore caricamento ratings:', err)
    });
  }

  // --- PAGINAZIONE LOGICA ---
  get paginatedRatings(): Rating[] {
    const filtered = this.newRatings.filter(r =>
      r.verbale.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      r.ditta.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      r.timestamp.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return filtered.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages(): number {
    const filtered = this.newRatings.filter(r =>
      r.verbale.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      r.ditta.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      r.timestamp.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    return Math.ceil(filtered.length / this.itemsPerPage) || 1;
  }
  nextPage(): void {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  prevPage(): void {
    if (this.currentPage > 1) this.currentPage--;
  }

  // --- ALTRO ---
  showRatingDetails(rating: Rating): void {
    this.selectedRating = rating;
  }

  closeModal(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.selectedRating = null;
    }
  }

  deleteRating(rating: Rating): void {
    const conferma = window.confirm(`Ma sei sicuro di voler eliminare il verbale "${rating.verbale}"?`);

    if (!conferma) {
      console.log('Eliminazione annullata');
      return;
    }

    this.ratingService.deleteRatingById(Number(rating.id)).subscribe({
      next: response => {
        console.log(response.message);
        this.newRatings = this.newRatings.filter(r => r.id !== rating.id);
        // Aggiorna la paginazione se necessario
        if (this.currentPage > this.totalPages) this.currentPage = this.totalPages || 1;
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
