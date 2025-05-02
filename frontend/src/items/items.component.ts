import { Component } from '@angular/core';
import {ItemService} from '../services/ItemService/item.service';
import {item} from './Model/item';

@Component({
  selector: 'app-items',
  imports: [],
  templateUrl: './items.component.html',
  standalone: true,
  styleUrl: './items.component.css'
})

export class ItemsComponent {
  constructor(private itemService: ItemService) {}

  // getListOfItems(): item[] {
  //   this.itemService.getItems().subscribe({
  //     next: data => {
  //       return data.content;
  //     },
  //     error: data => {
  //       return [];
  //     }
  //   })
  // }
}
