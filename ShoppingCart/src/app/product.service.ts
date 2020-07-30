
import {Product} from './product.model';

import { Component, EventEmitter, Injectable} from '@angular/core';


@Injectable()
export class ProductServices
{

    products : Product[] =
  [
      new Product('name','description','productImage',500),  //object create

      new Product('Nike Shoes','this is new sports shoes','iphone.jpg',500)
  ];

    constructor()
    {

    }
    getProduct()
    {
        return this.products.slice();
    }

}
 
 
 		



