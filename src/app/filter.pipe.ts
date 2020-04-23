import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './models/employee.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(employees:Employee[], searchTerm: string):Employee[]{
    if(!searchTerm)
    {
      return employees;
    }
    return employees.filter
    (employee=>employee.name.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase())!==-1)
  }

}
