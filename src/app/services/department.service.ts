import { Injectable } from '@angular/core';
import { Department } from '../models/index.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends BaseService<Department> {

  constructor() {
    super();
    this.add({ id: '0', name: 'IT' });
    this.add({ id: '1', name: 'Payrole' });
  }
}
