import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit { 
    title = 'Hero Edit';
    hero: Hero = { id: 1, name: "Windstorm" };
    selectedHero: Hero;
    heroes: Hero[];

    constructor(private heroService: HeroService, private router: Router) { };

    onSelect(hero: Hero) { 
        this.selectedHero = hero; 
    };

    ngOnInit() {
        this.getHeroes();
    };

    getHeroes() {
        this.heroService.getHeroesSlowly().then((heroes: Hero[]) => {
            this.heroes = heroes;
        });
    }
    
    gotoDetail() {
        this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
}
