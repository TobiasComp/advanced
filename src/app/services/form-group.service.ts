import { Injectable } from '@angular/core';
import { ContactUs } from '../models/contact-us';

@Injectable({
  providedIn: 'root'
})
export class FormGroupService {

  contactUs:ContactUs[] = []
  // [{subject:"aa",content:"bb",name:"tuvia",email:"ksahj"}]

  constructor() { }
}
