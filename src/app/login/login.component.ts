import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!: string;
  password?: string;
  errorMessage?: string;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.username && this.password) {
      this.authService.loginAuth(this.username, this.password).subscribe(
        response => {
          // Questa funzione viene chiamata quando la richiesta ha esito positivo
          this.authService.login();
          this.router.navigate(['/']);
        },
        error => {
          // Questa funzione viene chiamata quando la richiesta ha esito negativo
          this.errorMessage = 'Credenziali non valide!';
        },
        // Non hai bisogno della terza funzione in questo contesto
      );
    } else {
      this.errorMessage = 'Inserisci username e password!';
    }
  }
  
}