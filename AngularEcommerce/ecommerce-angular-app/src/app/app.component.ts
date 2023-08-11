import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ecommerce-angular-app';

  private firestore: Firestore = inject(Firestore);
  users$: Observable<User[]>;

  constructor() {
    const usersCollection = collection(this.firestore, 'test');
    this.users$ = collectionData(usersCollection) as Observable<User[]>;

    this.users$.subscribe({
      next(response) { 
        console.log(response); 
      },
      error(err) { 
        console.error('Error: ' + err); 
      },
      complete() { 
        console.log('Completed'); 
      }
    });    
  }  
}

export interface User {
  name: string;
  lastname: string;
}