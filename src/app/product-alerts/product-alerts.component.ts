import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input()  product; // alt +enter 自动import
  @Output() notify = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

}
