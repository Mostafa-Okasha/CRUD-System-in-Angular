import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import {EmployeeServiceService} from '../employee-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees:Employee[]=[];
  searchTerm:string;
  constructor(private _EmployeeServiceService:EmployeeServiceService,private _Router:Router) { }

  ngOnInit() {
    this.employees=this._EmployeeServiceService.getEmployee();
  }

  onclick(EmployeeId:number)
  {
    this._Router.navigate(['/employees',EmployeeId])
  }
}
