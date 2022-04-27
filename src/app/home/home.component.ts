import { Component, OnInit } from '@angular/core';
import { RestAPIService } from 'src/services/rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categoriesList: string[] = [];
  productsList: any;

  constructor(private rest: RestAPIService) {}

  ngOnInit(): void {
    this.rest.getCategories().subscribe((res) => (this.categoriesList = res));
    this.getProductsList('jewelery');
  }

  getProductsList(categoryName: string): void {
    this.rest
      .getProductsList(categoryName)
      .subscribe((res) => (this.productsList = res));
  }
}
