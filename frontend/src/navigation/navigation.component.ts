import {Component, OnInit} from '@angular/core';
import {ItemsComponent} from '../items/ItemsList/items.component';
import {AuthorizationService} from '../services/AuthorizationService/authorization.service';
import {jwtDecode} from 'jwt-decode';
import {Payload} from './Model/payload';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [ItemsComponent, RouterLink],
  templateUrl: './navigation.component.html',
  standalone: true,
  styleUrl: './navigation.component.css'
})

export class NavigationComponent implements OnInit {

  username: string = "";
  role: string = "";

  constructor(public AuthService: AuthorizationService) {}

  ngOnInit() {
    const token = this.AuthService.getToken();
    if (token) {
      const decoded = jwtDecode<Payload>(token);
      this.username = decoded.sub;
      this.role = decoded.role;
    }
  }
}
