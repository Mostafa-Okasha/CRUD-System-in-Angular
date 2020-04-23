import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl,FormGroup,Validators, NgForm} from '@angular/forms';
import { from } from 'rxjs';
import {Employee} from '../models/employee.model';
import {EmployeeServiceService} from '../employee-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {
  @ViewChild('employeeForm', { static: true }) createEmployeeForm: NgForm;
  previewPhoto:boolean=false;
  employee:Employee={
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null
  };
  data=new FormGroup(
    {
    name: new FormControl('',[Validators.required,Validators.minLength(4)]),
    mail: new FormControl('',[Validators.required,Validators.email]),
    phone: new FormControl('',[Validators.required,Validators.maxLength(4)]),
    contact: new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required]),
    department:new FormControl('',[Validators.required]),
    isActive:new FormControl('',[Validators.required]),
    dateofbirth:new FormControl('',[Validators.required]),
    photoPath:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    Confirm:new FormControl('',[Validators.required]),
    });

  constructor(private _EmployeeServiceService:EmployeeServiceService,private _Router:Router) {

   }
   saveEmployee():void
   {
    const newEmployee:Employee= Object.assign({},this.employee);
    this._EmployeeServiceService.save(newEmployee);
    this.createEmployeeForm.reset();
    this._Router.navigate(['employees/:id']);
   }

  ngOnInit() {
  }
  togglePhotoPreview()
  {
    this.previewPhoto=!this.previewPhoto;
  }

}
