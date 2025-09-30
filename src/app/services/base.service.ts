import { computed, signal } from '@angular/core';

export class BaseService<T extends { id: string }> {
  protected items = signal<T[]>([]);

  constructor() { }

  getAll() {
    return this.items;
  }

  getById(id: string) {
    return computed(() => this.items().find(i => i.id === id));
  }

  getByIndex(index: number) {
    return computed(() => this.items()[index]);
  }

  add(item: T) {
    this.mockAdd(item);
    // DB verbindung hier einbauen!
  }

  delete(id: string) {
    this.mockDelete(id);
    // DB verbindung hier einbauen!
  }

  update(id: string, updatedItem: T) {
    this.mockUpdate(id, updatedItem);
    // DB verbindung hier einbauen!
  }


  // Mock funktionen zum testen des UI.
  mockAdd(item: T) {
    this.items.update(list => [...list, item]);
  }

  mockDelete(id: string) {
    this.items.update(list => list.filter(u => u.id !== id));
  }

  mockUpdate(id: string, updatedItem: T) {
    this.items.update(list =>
      list.map(u => u.id === id ? updatedItem : u)
    );
  }
}
