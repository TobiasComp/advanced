import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  name = new FormControl('')
  age = new FormControl('')

  userList:{}[]=[]

  constructor() { }

  ngOnInit() {
  }

  addUser(){
    console.log('name',this.name);
    console.log('age',this.age);
    
    
    this.userList.push({
      name:this.name.value,
      age: this.age.value,
    })

    this.name.setValue( this.name.value )
    this.age.setValue ( this.age.value )    
  }

}
