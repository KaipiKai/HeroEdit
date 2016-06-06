import { Hero } from './hero.ts';

export interface IHeroService {
    getHeroes(): Hero[];    
}
