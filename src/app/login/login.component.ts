import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [RouterLink, CommonModule, FormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
    correo = '';
    password = '';
    error = false;

    constructor(private apiService: ApiService, private router: Router, private authService: AuthService) { }

    login() {
        this.apiService.postData('auth/login', { correo: this.correo, contrasena: this.password })
        .then((response) => {
            this.error = false;
            this.authService.setToken(response.jwt);
            this.router.navigate(['/']);
        })
        .catch((error) => {
            this.error = true;
        });
    }
}
