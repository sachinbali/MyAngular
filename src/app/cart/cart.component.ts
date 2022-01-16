import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  itesm = this.cartService.getItems();

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });
  shippingCosts = this.cartService.getShippingPrices();

  ngOnInit(): void {}

  onSubmit(): void {
    this.cartService.clearCart();
    console.warn('your order has been submited', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
