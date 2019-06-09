import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { BookingsComponent } from './components/bookings/bookings.component';

const routes: Routes = [
  { path: "dashboard", component: DashBoardComponent},
  { path: "login", component: LoginComponent},
  { path: "bookings", component: BookingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit{

  ngOnInit() {
  }
 }
