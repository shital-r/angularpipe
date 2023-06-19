import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpGenderPipe } from './emp-gender.pipe';
import { PipeComponent } from './pipe/pipe.component';
import { GenderComponent } from './pipe/gender/gender.component';
import { CustomPipe } from './custom.pipe';
import { LoginComponent } from './pipe/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpGenderPipe,
    PipeComponent,
    GenderComponent,
    CustomPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
