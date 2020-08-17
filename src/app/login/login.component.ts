import { UserService } from './../user.service';
import { UserData } from './../modeles/UserData';
import { Router } from '@angular/router';
import { LoginService } from './../login.service';
import { LoginData } from './../modeles/LoginData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
  '../../assets/css/login.css',
  '../../assets/css/bootstrappV4.1.1.css']
})
export class LoginComponent implements OnInit {

  data:LoginData;
  dataUser:UserData;
  constructor(private loginService: LoginService , private userService: UserService ,  private router: Router) {
    this.data= new LoginData('','');
    this.dataUser = new UserData(null,'','',null,'','',null);
  }

  onConnectionSubmit(){
    console.log(this.data);
    this.loginService.LoginRequest(this.data)
    .subscribe(rest=>{
      console.log(rest);
      this.loginService.saveToken(rest);

      //tester le role du user et le rediriger vers sa page respective
      if(rest.authorities[0].authority=='ROLE_ADMIN')
      {
        this.router.navigate(['/user']);
      }
      else
      {
        this.router.navigate(['/client']);
      }
    },
    err => console.log(err)
    )

    /*this.userService.getUser()
    .subscribe(rest=>{
      console.log(rest);
      :/this.loginService.saveToken(rest);
    },
    err => console.log(err)
    )*/
  }

  ngOnInit(): void {
  }
  

}
