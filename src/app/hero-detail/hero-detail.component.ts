import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../model/hero';
import { ActivatedRoute } from '@angular/router'
import { HeroService } from '../service/hero.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero : Hero

  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit(): void {
    console.log(this.route.snapshot)
    let id = +this.route.snapshot.params['id']
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero))
  }

  goBack() {
    this.location.back()
  }
}
