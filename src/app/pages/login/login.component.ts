import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() public eventEmitter = new EventEmitter();

  public showLoginPage = true;

  constructor() { }

  ngOnInit(): void {
  }

  public isLoged(event: boolean){
      this.eventEmitter.emit(event)
  }

}
