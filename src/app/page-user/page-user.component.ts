import { AjoutUserService } from './../ajout-user.service';
import { UserInscription } from './../modeles/UserInscription';
import { LoginService } from './../login.service';

import { CommonModule } from "@angular/common";
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { UserData } from '../modeles/UserData';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css']
})
export class PageUserComponent implements OnInit {

  data: UserData[];
  constructor(private userService: UserService) { }

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

}
