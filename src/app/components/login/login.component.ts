import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  inv:boolean = false;
  ngOnInit() {
    window.onload = () =>{
      if(sessionStorage.getItem('User') != null){
        this.loginService.activeInv = true;
      }
    }
  }

  loginBtn(){
    alert('Estas funcion actualmente no esta disponible');
  }

  invitBtn(){
    let input = document.querySelector('.invitadoDiv #content2 .user input')['value'];
    if(input.length >=1){
      sessionStorage.setItem('User', input);
      this.loginService.activeInv = true;
      alert('Bienvenido');
    }else{
      alert('El nombre es muy corto, deve tener minimo 4 caracteres');
    }
  }

  
}
