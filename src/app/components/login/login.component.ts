import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//users
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  public users: Array<any> = new Array();


  ngOnInit() {
    this.httpClient.get("http://localhost:4000/users").subscribe(
      (response: any) => {
        console.log(response);
        this.users = response;
      },
      (err) => {
        console.log(err);
      });
    }


}
