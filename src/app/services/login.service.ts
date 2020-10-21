import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {GlobalService} from './global.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  gURL: string;
  constructor(private GlobalV: GlobalService, private http: HttpClient) {

    this.gURL = this.GlobalV.apiServer + '/login/login.php';

  }

  qUser(vUsr: string) {
    return this.http.post(this.gURL + '?opcion=1', {Usr: vUsr}, this.GlobalV.optionsHttp);
  }

  qPwd(vUsr: string, vPwd: string) {
    return this.http.post(this.gURL + '?opcion=2', {Usr: vUsr, Pwd: vPwd}, this.GlobalV.optionsHttp);
  }
}
