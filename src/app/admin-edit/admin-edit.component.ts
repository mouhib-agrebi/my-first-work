import { Component, OnInit } from '@angular/core';
import { Admin } from '../classes/admin';
import { UserService } from '../services/user.service';
@Component({
  selector: 'admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  topic: Admin;
  topics: any;

  constructor(private topicService: UserService) { }

  ngOnInit() {
    // subscribe permet de remplir le résultat
    this.topicService.read_Users().subscribe(data => {

      this.topics = data.map(e => {
        return {
         id: e.payload.doc.id,

         firstname: e.payload.doc.data()["firstname"],
         lastname: e.payload.doc.data()["lastname"],
         email: e.payload.doc.data()["email"],



        };
      });
      console.log(this.topics);

    });
  }
access(key: string) {
  localStorage.setItem('room', key);
  window.location.replace('admin/admin-edit');
}

update(){

}

delet(){

}

}

