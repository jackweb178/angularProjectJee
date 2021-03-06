
import { UserService } from './../user.service';
import { RoleServiceService } from './../role-service.service';
import { UserInscription } from './../modeles/UserInscription';
import { AjoutUserService } from './../ajout-user.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RoleData } from '../modeles/RoleData';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css',]
})
export class InscriptionComponent implements OnInit {

  inscriptionUser: UserInscription;
  role : RoleData;
  @Output() public passEntry=new EventEmitter ;
  constructor(private ajoutUserService:AjoutUserService ,private userService:UserService, private roleService : RoleServiceService,private activeModal : NgbActiveModal) {
    this.inscriptionUser = new UserInscription('','','',null,'','',null);
    this.inscriptionUser.role = new RoleData();
  }

  ngOnInit(): void {
    this.onIscriptionSubmit;
    this.roleService.getRole()
    .subscribe(
      res => {
        console.log(res);
        this.role = res;
      },
      err => console.log(err)
    );
  }

  onIscriptionSubmit(){
    console.log(this.inscriptionUser);
    this.userService.AjoutRequest(this.inscriptionUser)
    .subscribe(rest=>{
      console.log(rest);
      this.inscriptionUser= rest;

    },
    err => console.log(err)
    )

    this.passEntry.emit
    this.activeModal.close();

  }

}
