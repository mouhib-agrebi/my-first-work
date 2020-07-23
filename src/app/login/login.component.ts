import { Component, OnInit } from '@angular/core';
/*
import { NgForm } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
*/

import { AdminService } from '../services/admin.services';
import { Admin } from '../classes/admin';

declare var M: any;
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AdminService]
  
})

export class LoginComponent implements OnInit {
admins:Admin[];

admin:Admin;
  constructor(private adminService: AdminService) { }

  ngOnInit() {

  this.admin=new Admin();
  
  }


  }
