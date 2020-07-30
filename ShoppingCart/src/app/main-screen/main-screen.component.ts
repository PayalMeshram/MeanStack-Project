import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model'
import { ProductServices } from '../product.service'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  products:Product[];
  
  constructor(private productService: ProductServices , private http: HttpClient) { }

  ngOnInit(){

this.http.get<{[key:string]:Product}>("http://localhost:3005/api/product/get")
    .pipe(map(responseData => {
        const postArray =[];
        for (const key in responseData)
        {
            if(responseData.hasOwnProperty(key))
            {
                postArray.push({...responseData[key],id:key})
            }
        }

        return postArray;
           
    })).subscribe(posts =>{
        console.log("array"+posts);
  
       this.products = posts;
     });

    }
  }
