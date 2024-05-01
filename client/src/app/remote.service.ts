import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  HttpClient: HttpClient;
  baseURL:string;

  constructor(HttpClient: HttpClient) { 
    this.HttpClient = HttpClient;
    this.baseURL = "http://localhost:8080";
  }

  retrieveMessage(email:Email): Observable<HttpResponse<Object>> {
    return this.HttpClient.post(this.baseURL + "/retrievedEmail", JSON.stringify(email), {
      observe:'response',
      withCredentials: true, 
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    })
  }

  
}

export interface Email {
  recipient:string;
  subject:string;
  message:string;
}
