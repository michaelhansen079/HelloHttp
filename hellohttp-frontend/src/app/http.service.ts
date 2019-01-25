import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { SecretMessage } from "./secretmessage";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = "http://localhost:8080/hellohttp/rest/secretmessage"

  constructor(private http: HttpClient) { }

  public getSecretMessage(): Observable<SecretMessage> {
    return this.http.get<SecretMessage>(this.url);
  }
}
