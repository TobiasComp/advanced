import { Component, OnInit } from '@angular/core';
import { SuperService } from '../../services/guards/super.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public superGuard:SuperService, public router:Router) { }

  ngOnInit() {
  }

  login(){
    this.superGuard.isLoggedIn = true;
    this.router.navigateByUrl('');
  }
}
