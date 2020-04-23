import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeesComponent } from './employees/create-employees.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {confirmValidator} from './employees/confirm-validator';
import {EmployeeServiceService} from '../app/employee-service.service';
import {CanDeactiveGuardService} from '../app/can-deactive-guard.service';
import { from } from 'rxjs';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { FilterPipe } from './filter.pipe';
const appRoutes: Routes=[
  {path:'employees/:id', component:ListEmployeesComponent},
  {path:'create', component:CreateEmployeesComponent,
   canDeactivate:[CanDeactiveGuardService]
  },
  {path:'', redirectTo:'/list',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeesComponent,
    confirmValidator,
    DisplayEmployeeComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    
  ],
  providers: [EmployeeServiceService,CanDeactiveGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/