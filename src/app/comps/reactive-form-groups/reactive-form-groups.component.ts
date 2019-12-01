import { Component, OnInit } from '@angular/core';
import { FormGroupService } from '../../services/form-group.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ContactUs } from '../../models/contact-us';

@Component({
  selector: 'app-reactive-form-groups',
  templateUrl: './reactive-form-groups.component.html',
  styleUrls: ['./reactive-form-groups.component.css']
})
export class ReactiveFormGroupsComponent implements OnInit {

  contactUsFormGroup = new FormGroup({
    subject: new FormControl(''),
    content:new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
  })

  constructor(public contactService: FormGroupService) { }

  ngOnInit() {
  }

  submitContact(){
    let contactGroup:ContactUs =  this.contactUsFormGroup.value   
    this.contactService.contactUs.push(contactGroup)
  }

}
