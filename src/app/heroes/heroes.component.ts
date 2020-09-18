import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[]

  constructor(private heroService: HeroService,
    private messageService: MessageService) {}

  ngOnInit(): void {
    this.loadHeroes()
  }

  loadHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes))
  }

  onAdd(name: string) {
    this.heroService
      .addHero({ name } as Hero)
      .subscribe((hero) => {
        if (hero) {
          this.heroes.push(hero)
        }
      })
  }

  delete(hero: Hero) {
    this.heroService
      .deleteHero(hero)
      .subscribe((response) => {
        if (typeof response != 'undefined')
          this.heroes = this.heroes.filter((heroItem) => heroItem != hero)
      })
  }
}
