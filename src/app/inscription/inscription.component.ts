import { UserService } from './../user.service';
import { RoleServiceService } from './../role-service.service';
import { UserInscription } from './../modeles/UserInscription';
import { AjoutUserService } from './../ajout-user.service';
import { Component, OnInit, Input } from '@angular/core';
import { RoleData } from '../modeles/RoleData';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  //@Input() public inscriptionUser;
  inscriptionUser: UserInscription;
  roleData : RoleData;
  constructor(private userService:UserService /*, private roleService : RoleServiceService*/) { 
    this.inscriptionUser = new UserInscription('','','',null,'','');
  }

  ngOnInit(): void {
    this.onIscriptionSubmit();
    /*this.roleService.getRole()
    .subscribe(
      res => { 
        console.log(res);
        this.roleData = res;
      },
      err => console.log(err)
    );*/
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
  }

}
