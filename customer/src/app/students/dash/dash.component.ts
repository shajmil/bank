


  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormControl, Validators } from '@angular/forms';
  import { Router } from '@angular/router';
  import Swal from 'sweetalert2';
  import { StudentsService } from '../students.service';
  

  @Component({
    selector: 'app-dash',
    templateUrl: './dash.component.html',
    styleUrls: ['./dash.component.scss']
  })
  export class DashComponent implements OnInit {
    user:any
  acno=""
  pswd=""
  amnt=""
  alertWithSuccess(){  
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success')  
  }  
    constructor(private ds:StudentsService,private fs:FormBuilder ,private route:Router) {
  
  this.user=localStorage.getItem('currentUser')
  
  
  
     }
  
    ngOnInit(): void {
      // if(!localStorage.getItem('currentacno')){
      //   alert('Please login')
      //   this.route.navigateByUrl('')
      // }
    }
    form = this.fs.group({
      acno:['',[Validators.pattern('[0-9]*')]],
      pswd:[''],
      amnt:['',[Validators.pattern('[0-9]*')]],
      
    })
    get f(){
      return this.form.controls
     }
    withdraw(){
      let acno =this.form.value.acno
      let pswd =this.form.value.pswd
  let amnt =this.form.value.amnt
  if(this.form.valid){
  
    var result = this.ds.withdraw(acno,pswd,amnt).subscribe((result:any)=>{
  
      if(result){
        // console.log('result: ', result);
        alert(`${result.message}`)
        this.form.reset()
      }
    },result=>{
    
      
      console.log(this.form.errors);
      
    }
      
     ) 
  }else{
      console.log(this.form.errors);
  }
    }
    deposit(){
      let acno =this.form.value.acno
      // console.log('acno: ', acno);
      let pswd =this.form.value.pswd
      // console.log('pswd: ', pswd);
  let amnt =this.form.value.amnt
  // console.log('amnt: ', amnt);
  var result = this.ds.deposit(acno,pswd,amnt).subscribe((result:any)=>{
  
    if(result){
      // console.log('result: ', result);
      alert(` ${result.message}`)
      this.form.reset()
    }
  },result=>{
  
    
    console.log(this.form.errors);
    
  }
    
   ) }
  
  
  data(){
      this.acno = localStorage.getItem('currentacno') ||' '
    
  }
  show(){
    // console.log('hii');
    this.acno =""
  }
  }
  

