import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//users
@Component({
  selector: 'app-login',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})



export class BookingsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  // public user: any= {
  //   id: 0,
  //   firstName: "",
  //   lastName: "",
  //   email: ""
  // }

  public bookings: Array<any> = new Array();


  ngOnInit() {
    this.httpClient.get("http://localhost:4000/bookings").subscribe(
      (response: any) => {
        console.log(response);
        this.bookings = response;
      },
      (err) => {
        console.log(err);
      });
    }


}
