import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { product } from '../data-type';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  productList: undefined | product[];
  productMessage:  undefined | string;
  delIcon=faTrash;
  editIcon=faEdit;
  constructor(private product: ProductsService) { }
  
  ngOnInit(): void {
  this.list();
  }


  deleteProduct(id:number){
    this.product.deleteProduct(id).subscribe((result)=>{
      if(result){
        this.productMessage="Product is Deleted";
        this.list()
      }
    });
    setTimeout(()=>{
      this.productMessage=undefined;
    },3000)
  }

  list(){
    this.product.productList().subscribe((result)=>{
      this.productList=result;
    })
  }

}
