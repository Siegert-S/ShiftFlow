import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {

  employees = inject(EmployeeService)

  users = this.employees.getAll();
}
