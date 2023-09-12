import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { SignUp } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller: SellerService, private router: Router) { }

  showLogin=false;
  authError:string="";
  
  ngOnInit():void{
    this.seller.reloadSeller();
  }
  
  signUp(data:SignUp):void{
    this.seller.userSignUp(data)
  }
  logIn(data:SignUp):void{
    this.authError="";
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError=('Email or Password is Incorrect !')
      }
    })
  }

  openLogin(){
    this.showLogin=true
  }

  openSignUp(){
    this.showLogin=false;
  }

}
