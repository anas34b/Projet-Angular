import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.credentials.email, this.credentials.password).subscribe({
      next: (response) => {
        console.log('Réponse de connexion', response);
        this.router.navigate(['/user-list'])
      },
      error: (error) => {
        console.error('Erreur de connexion', error);
        this.errorMessage = 'Échec de la connexion. Veuillez vérifier vos informations.';
      }
    });
  }
}
