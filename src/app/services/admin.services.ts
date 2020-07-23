import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private firestore: AngularFirestore
  ) {


   }


  create_NewAdmin(record) {
    return this.firestore.collection('Admin').add(record);
  }

  read_Admins() {

    return this.firestore.collection('Admin').snapshotChanges();
  }

  update_Admin(recordID, record) {
    this.firestore.doc('Admin/' + recordID).update(record);
    console.log('updated');
  }

  delete_Admin(record_id) {
    this.firestore.doc('Admin/' + record_id).delete();
  
  }
}
