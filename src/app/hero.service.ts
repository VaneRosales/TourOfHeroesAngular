import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService ) { }
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); // Simula una llamada HTTP asíncrona
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  getHero(id:number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!; // the ! operator tells TypeScript that the value is not null or undefined
    this.messageService.add(`HeroService: fetched hero id=${id}`); // of() creates an Observable from the array
    return of(hero);
  }
}
