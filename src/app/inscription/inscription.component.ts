import { UserInscription } from './../modeles/UserInscription';
import { AjoutUserService } from './../ajout-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  
  inscriptionUser: UserInscription;
  constructor(private ajoutUserService:AjoutUserService) { 
    this.inscriptionUser = new UserInscription('','','',null,'','',null);
  }

  ngOnInit(): void {
    this.onIscriptionSubmit
  }

  onIscriptionSubmit(){
    console.log(this.inscriptionUser);
    this.ajoutUserService.AjoutRequest(this.inscriptionUser)
    .subscribe(rest=>{
      console.log(rest);
      this.inscriptionUser= rest;
      
    },
    err => console.log(err)
    )
  }

}
