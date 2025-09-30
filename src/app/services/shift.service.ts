import { Injectable } from '@angular/core';
import { Shift } from '../models/index.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ShiftService extends BaseService<Shift> {

  constructor() {
    super();
  }
}
