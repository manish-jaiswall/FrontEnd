import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListUsersComponent } from './list-users/list-users.component';

import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [
  
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    MatBadgeModule
  ],
  exports:[
    ListUsersComponent
  ]
})
export class UsersModule { }
