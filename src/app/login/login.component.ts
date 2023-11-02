import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  httpClient = inject(HttpClient);

  username: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('https://localhost:7110/api/users/login', { username: this.username, password: this.password })
      .subscribe(
        response => {
          console.log('login success!!', response);
        },
        error => {
          console.log('login fail!!', error);
        }
      );
  }
}
