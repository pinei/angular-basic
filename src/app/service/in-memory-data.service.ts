import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes: Hero[] = [
      { id: 1, name: 'Thor'},
      { id: 2, name: 'Hulk'},
      { id: 3, name: 'Homem de Ferro'},
      { id: 4, name: 'Mulher Maravilha'},
      { id: 5, name: 'Pantera Negra'}
    ]

    return { heroes }
  }

  genId(heroes: Hero[]) {
    return (heroes && heroes.length > 0) ?
      Math.max(...heroes.map((hero) => (hero.id))) + 1 : 1
  }

  constructor() { }
}
