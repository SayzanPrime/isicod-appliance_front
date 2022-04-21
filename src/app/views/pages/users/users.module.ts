import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { StudentsComponent } from './students/students.component';
import { RouterModule, Routes } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';


const routes: Routes = [
  {
    path: 'students',
    component: StudentsComponent,
  }
]

@NgModule({
  declarations: [UsersComponent, StudentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class UsersModule { }
