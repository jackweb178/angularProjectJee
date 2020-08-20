import { UserService } from './../user.service';
import { UserInscription } from './../modeles/UserInscription';
import { RoleServiceService } from './../role-service.service';
import { RoleData } from './../modeles/RoleData';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-edit-user',
  templateUrl: './modal-edit-user.component.html',
  styleUrls: ['./modal-edit-user.component.css']
})
export class ModalEditUserComponent implements OnInit {

  @Input() public data;
  @Output() public passEntry=new EventEmitter ;
  inscriptionUser: UserInscription;
  role : RoleData;
  constructor(public activeModal : NgbActiveModal, private roleService : RoleServiceService , private userService : UserService) {
    this.inscriptionUser = new UserInscription('','','',null,'','',null);
    this.inscriptionUser.role = new RoleData();
   }


  ngOnInit(): void {
    this.roleService.getRole()
    .subscribe(
      res => {
        console.log(res);
        this.role = res;
      },
      err => console.log(err)
    );
  }

  update()
  {
    console.log(this.inscriptionUser);
    this.userService.updateUser(this.inscriptionUser)
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
