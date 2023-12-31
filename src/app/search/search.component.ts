import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { product } from '../data-type';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResult: undefined | product[];

  constructor(private activeRoute:ActivatedRoute, private product: ProductsService) { 
  }
  
  ngOnInit(): void {
    this.search();
  }

  search(){
    let query = this.activeRoute.snapshot.paramMap.get('query');
    query && this.product.searchProducts(query).subscribe((result)=>{
      this.searchResult= result;
      console.warn('query',query);
    }) 
  }

  

}
