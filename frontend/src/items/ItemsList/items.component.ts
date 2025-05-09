import {Component, OnInit} from '@angular/core';
import {ItemService} from '../../services/ItemService/item.service';
import {item} from '../Model/item';
import {RouterLink} from '@angular/router';
import {NavigationComponent} from '../../navigation/navigation.component';

@Component({
  selector: 'app-items',
  imports: [
    RouterLink,
  ],
  templateUrl: './items.component.html',
  standalone: true,
  styleUrl: './items.component.css'
})

export class ItemsComponent implements OnInit {
  items: item[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.getListOfItems();
  }

  getListOfItems() {
    this.itemService.getItems().subscribe({
      next: data => {
        this.items = data.content;
      },
      error: data => {
        this.items = [];
      }
    })
  }
}
