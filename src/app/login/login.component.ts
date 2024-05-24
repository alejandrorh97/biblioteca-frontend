import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  correo: string | undefined;
  password: string | undefined;

  constructor() { }

  ngOnInit() {
    this.correo = 'prueba';
    this.password = 'adsfadf';
  }
}
