import { Injectable } from "@angular/core";
import { HEROES } from '../model/mock-heroes'
import { Hero } from '../model/hero';

@Injectable({
    providedIn: 'root'
})
export class HeroService {
    constructor() {}

    getHeroes(): Hero[] {
        return HEROES
    }
}