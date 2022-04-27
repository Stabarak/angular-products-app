import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RestAPIService } from 'src/services/rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  productsList: any;

  constructor(private rest: RestAPIService) {}

  ngOnInit(): void {
    this.rest.getAllProducts().subscribe((res) => {
      this.productsList = res;
    });
  }
}
