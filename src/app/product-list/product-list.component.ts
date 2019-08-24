import { Component, OnInit } from '@angular/core';
import {products} from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  products = products;
share() {
    window.alert('商品 已经分享！');
}

onNotify() {
  window.alert(' 哎呀妈呀，买不起啦 ！');
}
  ngOnInit() {
  }

}
