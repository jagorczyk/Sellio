import { Component } from '@angular/core';
import {AuthorizationService} from '../services/AuthorizationService/authorization.service';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authorization',
  imports: [
    FormsModule,
  ],
  templateUrl: './authorization.component.html',
  standalone: true,
  styleUrl: './authorization.component.css',
})

export class AuthorizationComponent {

  username: string = ""
  password: string = ""
  message: string = ""

  constructor(private AuthService: AuthorizationService, private router: Router) {}

  loginButtonHandler() {
    this.AuthService.login(this.username, this.password).subscribe({
      next: data => {
        this.AuthService.saveToken(data.token);
        this.router.navigate(["/navigation"]);
      },
      error: data => {
        this.message = data.error
        setTimeout(() => { this.message = "" }, 5 * 1000);
      }
    })
  }

  registerButtonHandler() {
    this.AuthService.register(this.username, this.password).subscribe({
      next: data => {
        this.loginButtonHandler()
      },
      error: data => {
        this.message = data.error
        setTimeout(() => { this.message = "" }, 5 * 1000);
      }
    })
  }

}
