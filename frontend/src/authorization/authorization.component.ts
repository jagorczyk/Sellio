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

  isLogging: boolean = true; // is logging or is registering
  username: string = ""
  password: string = ""
  repeat_password: string = ""

  constructor(private AuthService: AuthorizationService, private router: Router) {}

  loginButtonHandler() {
    this.AuthService.login(this.username, this.password).subscribe({
      next: data => {
        this.AuthService.saveToken(data.token);
        this.router.navigate(["/"]);
      }
    })
  }

  registerButtonHandler() {
    this.AuthService.register(this.username, this.password).subscribe({
      next: data => {
        this.loginButtonHandler()
      }
    })
  }

  changeToLoginOrRegister() {
    this.isLogging = !this.isLogging;
  }

}
