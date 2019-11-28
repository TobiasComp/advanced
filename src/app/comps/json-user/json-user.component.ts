import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-json-user',
  templateUrl: './json-user.component.html',
  styleUrls: ['./json-user.component.css']
})
export class JsonUserComponent implements OnInit {
  userNumber:number
  user:any
  constructor(public http:HttpClient, public activatedRoute:ActivatedRoute) { }
  api:string = "http://jsonplaceholder.typicode.com/users/";

  ngOnInit() {
    console.log(    this.activatedRoute);
    this.activatedRoute.params.subscribe(data=>{
      this.userNumber = data.id
      console.log(data);
      
    })
    this.activatedRoute.paramMap.subscribe(data => console.log(data));
    
    this.http.get(this.api+this.userNumber).subscribe( u=>this.user = u )

    console.log(this.activatedRoute.params);
    
  }

}
