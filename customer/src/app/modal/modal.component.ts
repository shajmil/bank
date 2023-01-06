

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(public modalRef: MdbModalRef<ModalComponent>,private fb:FormBuilder) {}

  ngOnInit(): void {
  }

  formGroup=this.fb.group({
    className:['',[Validators.pattern('[a-zA-Z]*'),Validators.required]],
    fees:['',[Validators.required,Validators.pattern('[0-9]*')]],

    description:[''],
   
       })
    get f(){ return this.formGroup.controls;}


  close(): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  }
add(){

}
}