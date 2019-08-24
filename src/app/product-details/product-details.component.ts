import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { products} from '../products';
import {CartService} from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
product;
//注入 service和路由
  constructor(private route: ActivatedRoute, private cartService: CartService ) {


  }
  addToCart(product) {
    window.alert('唉妈！你居然加入购物车了，你是不是像剁手了？');

    this.cartService.addToCart(product);
  }

  ngOnInit() {
        this.route.paramMap.subscribe(
      params => {
        this.product = products[ +params.get('productId')];
      });
  }

}