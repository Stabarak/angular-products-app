import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestAPIService } from 'src/services/rest-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  id: number = 0;
  product: any;
  constructor(private router: ActivatedRoute, private rest: RestAPIService) {}
  ngOnInit(): void {
    this.id = Number(this.router.snapshot.paramMap.get('id'));
    this.rest.getProductInfo(this.id).subscribe((response) => {
      this.product = response;
    });
  }

  onAddToCart(): void {
    this.rest.cartItems.push({ [this.id]: this.product });
  }
}
