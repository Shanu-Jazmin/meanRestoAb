import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Resto } from '../model/resto';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  private rooturl = "http://localhost:3000/api/List/"

  //HTTP Options
  private httpOptions={
    headers:new HttpHeaders()
    .set("Content-Type","application/json")
    .set("auth-token",localStorage.getItem("token"))
  }

  constructor(private http:HttpClient) { }

  getResto(): Observable<Resto[]>{
    return this.http.get<Resto[]>(this.rooturl)
  }
  getSingleResto(id:string){
    return this.http.get<Resto>(`${this.rooturl}/${id}`)
  }
  addResto(addresto){
    return this.http.post<any>(this.rooturl,addresto,this.httpOptions)
  }
  editResto(editresto,id:string){
    return this.http.put<any>(`${this.rooturl}/${id}`,editresto,this.httpOptions)
  }
  deleteResto(id:string){
    return this.http.delete(`${this.rooturl}/${id}`,this.httpOptions)
  }
}
