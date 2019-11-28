import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActivateIceCreamLinkService implements CanActivate{

  canActivate() {
    console.log("you can't have ice cream before you have vegetables!!!!!");
    
    return false;
  }
 
  constructor() { }
  
}
