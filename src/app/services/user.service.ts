import { computed, Injectable, signal } from '@angular/core';

export type User = {
  id: string;
  firstname: string;
  lastname: string;
}
@Injectable({
  providedIn: 'root'
})



export class UserService {


  private users = signal<User[]>(
    [
      { id: '1', firstname: 'Max', lastname: 'Test' },
      { id: '2', firstname: 'Meike', lastname: 'Probe' },
      { id: '3', firstname: 'Adolf', lastname: 'Platzhalter' },
      { id: '4', firstname: 'John', lastname: 'Dow' },
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

  addUser(user: User) {
    this.mockAdd(user);
    // DB verbindung hier einbauen!
  }

  deleteUser(id: string) {
    this.mockDelete(id);
    // DB verbindung hier einbauen!
  }

  updateUser(id: string, updatedUser: User) {
    this.mockUpdate(id, updatedUser);
    // DB verbindung hier einbauen!
  }


  // Mock funktionen zum testen des UI.
  
  mockAdd(user: User) {
    this.users.update(list => [...list, user]);
  }

  mockDelete(id: string) {
    this.users.update(list => list.filter(u => u.id !== id));
  }

  mockUpdate(id: string, updatedUser: User) {
    this.users.update(list =>
      list.map(u => u.id === id ? updatedUser : u)
    );
  }
}
