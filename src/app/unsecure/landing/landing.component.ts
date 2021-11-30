import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MyErrorStateMatcher } from './MyErrorStateMatcher';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router) { }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);

  matcher = new MyErrorStateMatcher();

    ngOnInit() {
    }

    login() : void {
      if(this.emailFormControl.value == 'admin@jgs.com' && this.passwordFormControl.value == 'admin'){
       this.router.navigate(["secure"]);
      }else {
        alert("Invalid credentials");
      }
    }
}
