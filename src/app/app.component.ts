import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public showLoginPage: boolean = true;

  public hideLoginPage(event: any){
    if(event){
      this.showLoginPage = false;
    }
  }
}
