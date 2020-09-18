import { Injectable } from "@angular/core";
import { HEROES } from '../model/mock-heroes'
import { Hero } from '../model/hero';
import { Observable, of } from  "rxjs";
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root'
})
export class HeroService {
    private heroes = HEROES

    constructor(private messageService: MessageService) {}

    getHeroes(): Observable<Hero[]> {
      this.messageService.add('HeroService: obtida lista de heróis')
      return of(this.heroes)
    }

    getHero(id: number): Observable<Hero> {
      this.messageService.add(`HeroService: obtido hero id=${id}`)
      return of(this.heroes.find((hero) => hero.id == id))
    }
}
