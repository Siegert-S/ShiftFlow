import { Injectable, } from '@angular/core';
import { Employee } from '../models/index.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})


export class EmployeeService extends BaseService<Employee> {

  constructor() {
    super();
    this.add({ id: '1', firstName: 'Max', lastName: 'Test', departmentId: 0 });
    this.add({ id: '2', firstName: 'Meike', lastName: 'Probe', departmentId: 0 });
    this.add({ id: '3', firstName: 'Adolf', lastName: 'Platzhalter', departmentId: 0 });
    this.add({ id: '4', firstName: 'John', lastName: 'Dow', departmentId: 0 });
  }
}
