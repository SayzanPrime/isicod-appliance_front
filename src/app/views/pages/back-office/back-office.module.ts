import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackOfficeComponent } from './back-office.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplianceComponent } from './appliance/appliance.component';
import { NewApplianceComponent } from './appliance/new-appliance/new-appliance.component';
import { EditApplianceComponent } from './appliance/edit-appliance/edit-appliance.component';
import { TypeApplianceComponent } from './type-appliance/type-appliance.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditTypeApplianceComponent } from './type-appliance/edit-type-appliance/edit-type-appliance.component';
import { NewTypeApplianceComponent } from './type-appliance/new-type-appliance/new-type-appliance.component';


const routes: Routes = [
  {
    path: 'appliance',
    component: ApplianceComponent,
  },
  {
    path: 'type-appliance',
    component: TypeApplianceComponent,  
  }
]

@NgModule({
  declarations: [BackOfficeComponent, ApplianceComponent, NewApplianceComponent, EditApplianceComponent, TypeApplianceComponent, EditTypeApplianceComponent, NewTypeApplianceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule
  ]
})
export class BackOfficeModule { }
