import { Component, OnInit } from '@angular/core';
import {HttpBackend, HttpClient} from "@angular/common/http";
//import "rxjs/add/operator/map";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  //constructor(private http:HttpClient) { }

  ngOnInit(): void {
    /*
    this.http.get("http://http://localhost:8080/products")
      .map(resp=>resp.toJSON())
  */
  }

}
