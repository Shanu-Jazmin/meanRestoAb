import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url="http://localhost:3000/api/User"
  constructor(private http:HttpClient, private router:Router) { }

  register(user) {
    return this.http.post<any>(`${this.url}/register`, user);
  }

  login(user) {
    return this.http.post<any>(`${this.url}/login`, user);
  }

   loggedIn(){
    return !!localStorage.getItem("token")
   }
   logOut(){
     localStorage.removeItem("token")
   this.router.navigate(["/resto"])
   }
}
