
import { Component, OnInit } from '@angular/core';
import { Admin } from '../classes/admin';
import { AdminService } from '../services/admin.services';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  admin: Admin;
  rmdp:string;
    constructor(private adminService: AdminService) { }
  
    ngOnInit() {
      this.admin = new Admin();
    }
    CreateRecord() {
      
      const record = {};
      record['firstname'] = this.admin.firstname;
      record['lastname'] = this.admin.lastname;
      record['email'] = this.admin.email;
      record['password'] = this.admin.password;
    
      this.adminService.create_NewAdmin(record).then(resp => {
      console.log(resp);
        
      alert('ajouté avec succés!');
      window.location.replace('admin');
  
         })
       
           .catch(error => {
             console.log(error);
           });
         }
  
  }