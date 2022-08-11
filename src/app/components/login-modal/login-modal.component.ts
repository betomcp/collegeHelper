import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  public email: string = "";
  public password: string = "";

  @Output() public sendData = new EventEmitter();

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  tryLogIn(){
    this.loginService.getUserByEmail(this.email).subscribe(
      res => {
        console.log(res);

        if(res.email == this.email){
          if(res.password == this.password){
            this.sendData.emit(true);
          }else{
            alert('Senha Invalida');
          }
        }else{
          alert('!!! Email Invalido !!!');
        }
      }
    )
  }

}
