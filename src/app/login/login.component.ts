import { Component, OnInit } from '@angular/core';


import {Admin} from '../classes/admin';
import { UserService } from  '../services/user.service';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

rmdp:string;
admin:Admin;
  constructor(private adminService:UserService) { }

  ngOnInit(): void {
    this.admin=new Admin();
  }
  login()
  {

    let us=Object.assign({},this.admin);
    this.adminService.create_NewUser(us);

  }

}