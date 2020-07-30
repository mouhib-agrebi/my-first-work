import { Component, OnInit } from '@angular/core';

import {Admin} from '../classes/admin';
import { UserService } from  '../services/user.service';
@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
rmdp:string;
admin:Admin;
  constructor(private adminService:UserService) { }

  ngOnInit(): void {
    this.admin=new Admin();
  }
  signup()
  {
    let us=Object.assign({},this.admin);
    this.adminService.create_NewUser(us);

  }
}