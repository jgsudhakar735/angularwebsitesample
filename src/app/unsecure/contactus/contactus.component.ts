import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;

  constructor() { }

  ngOnInit(): void {
  }

}
