import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ItemService} from '../../services/ItemService/item.service';
import {item} from '../Model/item';

@Component({
  selector: 'app-itemdetails',
  imports: [],
  templateUrl: './itemdetails.component.html',
  styleUrl: './itemdetails.component.css'
})

export class ItemDetailsComponent implements OnInit {
  itemInfo: item = {
    id: 0,
    name: '',
    img_url: '',
    price: 0,
    quantity: 0
  }

  constructor(private route: ActivatedRoute, private itemService: ItemService) {}

  ngOnInit() {
    const productName = this.route.snapshot.paramMap.get('name');
    this.itemService.getItemByName(productName).subscribe({
      next: data => {
        this.itemInfo = data;
      }
    })
  }

}
