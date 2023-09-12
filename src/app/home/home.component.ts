import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { product } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popularProducts: undefined | product[];
  trendyProducts: undefined | product[]
  constructor(private product:ProductsService) { }

  ngOnInit(): void {
    this.product.popularProducts().subscribe((data)=>{
      this.popularProducts=data;
    });
    this.product.trendyProducts().subscribe((data)=>{
      this.trendyProducts=data;
    })
  }

}
