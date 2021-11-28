import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { MyErrorStateMatcher } from '../landing/MyErrorStateMatcher';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router) { }

  username: string;
  password: string;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);

  matcher = new MyErrorStateMatcher();

    ngOnInit() {
    }

    login() : void {
      if(this.username == 'admin' && this.password == 'admin'){
       this.router.navigate(["user"]);
      }else {
        alert("Invalid credentials");
      }
    }

    signup(): void {
      this.router.navigate(["signup"]);
    }
}
