import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: FormGroup | any;
  constructor(private _http: HttpClient, private _route: Router) {}

  ngOnInit(): void {
    this.login = new FormGroup({
      fname: new FormControl(),
      password: new FormControl(),
    });
  }

  logindata(login: FormGroup) {
    this._http.get<any>('http://localhost:3000/users').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.fname === this.login.value.fname &&
            a.password === this.login.value.password
          );
        });

        if (user) {
          alert('you are successfully login');
          this.login.reset();
          this._route.navigate(['capabilities']);
        } else {
          alert('User Not Found');
          this._route.navigate(['login']);
        }
      },
      (err) => {
        alert('Something is wrong');
      }
    );
  }
}
