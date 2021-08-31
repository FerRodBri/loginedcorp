import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  // apiServer = 'https://devedcorp.fabsi.com.mx/api/';
   apiServer = 'https://edcorp.mx/api/';

  headers = new HttpHeaders()
  .set('Content-Type', 'application/json; charset=utf-8')
  .set('Access-Control-Allow-Origin', '*');
  optionsHttp = {headers: this.headers, withCredentials: true};

  constructor(private http: HttpClient) { }
}
