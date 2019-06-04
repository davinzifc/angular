import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reproductor';

  constructor(private loginService: LoginService){

  }

}
