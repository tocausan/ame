import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    UserService
  ]
})
export class HomeComponent {

  constructor(private userServices:UserService) {
  }

  logout() {
    this.userServices.logout();
  }

}
