import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { NewUser } from '../model/new-user';
import { UserLogin } from '../model/user-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = 'https://backendgabyds.onrender.com/auth/';
  // URL = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) { }

  public new(newUser: NewUser): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'new', newUser);
  }

  public login(userLogin: UserLogin): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.URL + 'login', userLogin);
  }
}
