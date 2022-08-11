import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private httpOptions = {  //headers customizados
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': 'Bearer szdp79a2kz4wh4frjzuqu4sz6qeth8m3'
    })
  }

  public getUserByEmail(email: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/collegeapi?email=${email}`, this.httpOptions).pipe(
      res => {
        console.log(res);
        return res;
      },
      error => error

    );
  }
}
