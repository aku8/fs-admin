import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  navItems: Array<any> = [
    {
      //not sure - listing or booking
      name: 'Listings',
      rout: '/home'
    },
    {
      name: 'Users',
      rout: '/users'
    },
    {
      name: 'Bookings',
      rout: '/bookings'
    }
  ]
  constructor(private router: Router, private httpClient: HttpClient) { }

  public listings: Array<any> = new Array();


  ngOnInit() {
    this.router.navigate(['users']);

    this.httpClient.get("http://localhost:4000/listings").subscribe(
      (response: any) => {
        console.log(response);
        this.listings = response;
      },
      (err) => {
        console.log(err);
      });
  }

  navTo(page) {
    this.router.navigate([page.rout]);
  }

}
