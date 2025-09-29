import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {

  userService = inject(EmployeeService)

  users = this.userService.getUsers();
}
