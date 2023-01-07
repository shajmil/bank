import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {
  currentAcno: any;
 
 
  constructor(private route:Router,public http:HttpClient)  { }
  login(acno:any,pswd:any){
    const data={
      acno,pswd    
    }
    this.currentAcno=acno
    
   return this.http.post('http://localhost:3000/Teacherlogin',data)}
 
}
