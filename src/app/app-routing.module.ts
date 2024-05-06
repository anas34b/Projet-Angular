import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: 'login' },
   { path: 'user-list', component: UserListComponent },
   { path: 'user/:id', component: UserDetailsComponent },
   { path: 'update/:id', component: UpdateUserComponent },
   { path: 'login', component: LoginComponent },
   { path: 'add', component: AddUserComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
