import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { UserListComponent } from './user-list/user-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
    UpdateUserComponent,
    AddUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule, 
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
