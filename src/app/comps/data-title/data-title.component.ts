import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-title',
  templateUrl: './data-title.component.html',
  styleUrls: ['./data-title.component.css']
})
export class DataTitleComponent implements OnInit {
  
  titleFromRoute:string
  constructor(public activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(shuki=>{
      this.titleFromRoute = shuki.title;
    })
  }

}
