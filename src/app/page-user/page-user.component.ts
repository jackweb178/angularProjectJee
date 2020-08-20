import { InscriptionComponent } from './../inscription/inscription.component';
import { ModalEditUserComponent } from './../modal-edit-user/modal-edit-user.component';
import { AjoutUserService } from './../ajout-user.service';
import { UserInscription } from './../modeles/UserInscription';
import { LoginService } from './../login.service';

import { CommonModule } from "@angular/common";
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { UserData } from '../modeles/UserData';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css']
})
export class PageUserComponent implements OnInit {

  data: UserData[];
  constructor(private userService: UserService, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.getUser();
  }

  getUser() {
    this.userService.getUser()
    .subscribe(rest=>{
      console.log(rest);
      this.data=rest;
      //this.loginService.saveToken(rest);
    },
    err => console.log(err)
    )
  }

  openModal(data){
    const modalres = this.modalService.open(ModalEditUserComponent);
    modalres.componentInstance.data = data;
  }

  openModalUser(){
    this.modalService.open(InscriptionComponent);
  }

}
