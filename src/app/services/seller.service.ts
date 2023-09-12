import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { SignUp, logIn } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerSignIn= new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false)

  constructor(private http:HttpClient, private router:Router) { }

  userSignUp(data:SignUp){
    this.http.post('http://localhost:3000/seller',data,{observe:'response'})
    .subscribe((result)=>{
      this.isSellerSignIn.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body))
      this.router.navigate(['seller-home'])
    })
  }

  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerSignIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }

  userLogin(data:logIn){
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((result:any)=>{

      if(result && result.body.length){
        localStorage.setItem('seller',JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
      }else{
        this.isLoginError.emit(true);
      }
    })
  }
}
