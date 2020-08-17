import { TokenInterceptorServiceService } from './token-interceptor-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorComponent } from './token-interceptor/token-interceptor.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PageUserComponent } from './page-user/page-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageUserComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    NewsLetterComponent,
    TokenInterceptorComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorServiceService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
