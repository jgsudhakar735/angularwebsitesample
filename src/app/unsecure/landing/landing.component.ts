import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { MyErrorStateMatcher } from './MyErrorStateMatcher';
import { CREDENTIALS } from 'src/app/common/credentials/UserCredentials';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router,
    private _snackBar: MatSnackBar) { }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);

  matcher = new MyErrorStateMatcher();

    ngOnInit() {
      localStorage.setItem("isLoggedIn","false")
    }

    login() : void {
      let isValid: boolean = false;
      CREDENTIALS.LOGIN_USERS.map(userDetails => {
        if(userDetails.userId == this.emailFormControl.value &&
          userDetails.password == this.passwordFormControl.value) {
            isValid = true;
          }
      })

      if(isValid){
        localStorage.setItem("isLoggedIn","true")
        this.router.navigate(["secure"]);
      }else {
        localStorage.setItem("isLoggedIn","false")
        this.openDailog("Invalid credentials","Ko");
      }
    }

    openDailog(message: string, action: string) {
      this._snackBar.open(message,action, {
        duration: 3000
      });
    }
}
