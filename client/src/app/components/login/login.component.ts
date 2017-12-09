import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]
})
export class LoginComponent {

  constructor(private userServices:UserService) {
  }

  login(event, username, password, next) {
    console.log('login')
    //this.userServices.login(event, username, password, next);
  }


}
