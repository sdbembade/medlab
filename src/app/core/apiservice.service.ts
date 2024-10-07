import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {


  baseUrl: string ="http://localhost:3000/";

  httpHeaders = new HttpHeaders({
    "content-type": "application/json"
  })


  constructor(private http: HttpClient) { }

  getdataFromserver(endpoint: String) {
    const url = this.baseUrl + endpoint;
    return this.http.get(url, { headers: this.httpHeaders });
  }
}

