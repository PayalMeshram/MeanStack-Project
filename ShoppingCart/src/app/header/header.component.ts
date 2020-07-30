import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../category.model';
import { Product } from '../product.model';
import { map } from 'rxjs/operators';
import { Subscription, BehaviorSubject  } from 'rxjs';
import { Router } from '@angular/router';
import { Userlogin } from '../userlogin.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user = new BehaviorSubject<Userlogin>(null);
  session_set = false;
  username : string;
  categories: Category[] ;
  constructor(private http:HttpClient , private router: Router) { }

  ngOnInit(): void {
    
    this.username = sessionStorage.getItem('user_name');
    console.log("=========================>"+this.username);
    this.session_set = true;
    
this.http.get<{[key:string]:Product}>("http://localhost:3005/api/category/get")
.pipe(map(responseData => {
    const postArray =[];
    console.log("Response Date =>"+responseData);
    for (const key in responseData)
    {
        if(responseData.hasOwnProperty(key))
        {
            postArray.push({...responseData[key]})
        }
    }
    console.log(postArray);
    return postArray;       
})).subscribe(posts =>{
    console.log("array====>"+posts);
   this.categories = posts;
 });
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/login']);
   
    localStorage.removeItem('userData');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_id');

    sessionStorage.removeItem('user_name');
    this.session_set = false;
  }

}
