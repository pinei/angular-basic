import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HEROES } from '../model/mock-heroes';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[]
  selectedHero: Hero

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.loadHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

  loadHeroes() {
    this.heroes = this.heroService.getHeroes()
  }

}
