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

  private accounts: { [key: string]: string } = {
    'caterina': 'caterina_password',
    'user2': 'password2',
  };
  

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.username && this.password && this.accounts[this.username] === this.password) {
      this.authService.login();
      this.router.navigate(['/']); // Reindirizza alla pagina principale o alla pagina desiderata dopo il login
    } else {
      this.errorMessage = 'Credenziali non valide!';
    }
  }
  
}
