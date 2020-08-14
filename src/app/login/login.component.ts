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
  constructor(private loginService: LoginService ,  private router: Router) {
    this.data= new LoginData('','');
  }

  onConnectionSubmit(){
    console.log(this.data);
    this.loginService.LoginRequest(this.data)
    .subscribe(rest=>{
      console.log(rest);
      this.loginService.saveToken(rest);

      //tester le role du user et le rediriger vers sa page respective
      if(rest.authorities[0].authority=='ROLE_USER')
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
  }

  ngOnInit(): void {
  }

}
