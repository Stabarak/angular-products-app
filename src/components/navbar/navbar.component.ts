import { Component, Input, OnInit } from '@angular/core';
import { RestAPIService } from 'src/services/rest-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() productsList: any;
  cartCount: number = 0;

  constructor(private rest: RestAPIService) {}
  ngOnInit(): void {
    this.rest.cartCounter$.subscribe((resp) => (this.cartCount = resp));
  }

  onSearchClick(): void {
    document.getElementById('productsList')?.focus();
  }
}
