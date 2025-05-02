import { Component } from '@angular/core';
import {ItemsComponent} from '../items/items.component';

@Component({
  selector: 'app-navigation',
  imports: [ItemsComponent],
  templateUrl: './navigation.component.html',
  standalone: true,
  styleUrl: './navigation.component.css'
})

export class NavigationComponent {
  isLogged: boolean = false;

}
