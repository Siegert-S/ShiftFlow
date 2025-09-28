import { computed, Injectable, signal } from '@angular/core';
import { Employee } from '../models/index.model';

// export type User = {
//   id: string;
//   firstname: string;
//   lastname: string;
// }
@Injectable({
  providedIn: 'root'
})



export class EmployeeService {


  private users = signal<Employee[]>(
    [
      { id: '1', firstName: 'Max', lastName: 'Test' },
      { id: '2', firstName: 'Meike', lastName: 'Probe' },
      { id: '3', firstName: 'Adolf', lastName: 'Platzhalter' },
      { id: '4', firstName: 'John', lastName: 'Dow' },
    ]
  )

  constructor() { }

  getUsers() {
    return this.users;
  }

  getUserByIndex(index: number) {
    return computed(() => this.users()[index]);
  }

  getUserById(id: string) {
    return computed(() => this.users().find(u => u.id === id));
  }

  addUser(user: Employee) {
    this.mockAdd(user);
    // DB verbindung hier einbauen!
  }

  deleteUser(id: string) {
    this.mockDelete(id);
    // DB verbindung hier einbauen!
  }

  updateUser(id: string, updatedUser: Employee) {
    this.mockUpdate(id, updatedUser);
    // DB verbindung hier einbauen!
  }


  // Mock funktionen zum testen des UI.

  mockAdd(user: Employee) {
    this.users.update(list => [...list, user]);
  }

  mockDelete(id: string) {
    this.users.update(list => list.filter(u => u.id !== id));
  }

  mockUpdate(id: string, updatedUser: Employee) {
    this.users.update(list =>
      list.map(u => u.id === id ? updatedUser : u)
    );
  }
}
