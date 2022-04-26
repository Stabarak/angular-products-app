import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() productsList: any;

  constructor() {}
  ngOnInit(): void {}

  onSearchClick(): void {
    document.getElementById('productsList')?.focus();
  }
}
