import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable()
export class HeroService {
    getHero(id: number): Promise<Hero> {
        return Promise.resolve(HEROES.find(hero => hero.id === id));
    }
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    };
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve => {
                setTimeout(() => resolve(HEROES), 2000);
            }
        );
    };
}