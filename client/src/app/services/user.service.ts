import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ApiConfig} from "../config/api";
import {User} from "../models/User";

@Injectable()
export class UserService {

  constructor(public http: HttpClient, public router: Router) {
  }

  login(event, username, password, next) {
    event.preventDefault();
    const body = JSON.stringify({username, password});
    this.http.post(ApiConfig.chineseApi.url.base + '/login', body)
      .subscribe(
        (response: Response) => {
          console.log(response);
          // localStorage.setItem('token', response.json().token);
          // this.router.navigate([next | 'home']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }


  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(ApiConfig.chineseApi.url.data + '/admin/users');
  }

  getUserByUsername(username): Observable<User> {
    return this.http.get<User>(ApiConfig.chineseApi.url.data + '/admin/user/' + username);
  }

}
