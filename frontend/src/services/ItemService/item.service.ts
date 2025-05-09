import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private api = "http://localhost:8080/items"

  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get(
      `${this.api}`
    )
  }

  getItemByName(name: string | null): Observable<any> {
    return this.http.get(
      `${this.api}/info?name=${name}`
    )
  }
}
