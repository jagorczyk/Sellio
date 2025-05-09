import { Component } from '@angular/core';
import {NavigationComponent} from '../../navigation/navigation.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-mainlayout',
  imports: [
    NavigationComponent,
    RouterOutlet
  ],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.css'
})
export class MainlayoutComponent {

}
