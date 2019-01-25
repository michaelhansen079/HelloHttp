import {Component, OnInit} from '@angular/core';
import { SecretMessage} from "./secretmessage";
import { HttpService} from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit{
  private secretMessage: SecretMessage;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getSecretMessage().subscribe(msg => this.secretMessage = msg);
  }
}
