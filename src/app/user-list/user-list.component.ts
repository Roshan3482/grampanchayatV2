import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['अ. क्र.', 'उपयोक्ता नाव', 'माहिती दुरुस्ती'];
  dataSource = ELEMENT_DATA;
  isShowUserList = true;

  constructor() { }

  ngOnInit(): void {
  }

  showNewUserForm() {
    this.isShowUserList = false;
  }
  showUserList(){
    this.isShowUserList = true;
  }

  save(){}
  cancel(){}

}




export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'User 1' },
  { position: 2, name: 'User 2' },
  { position: 3, name: 'User 3' },
];
