import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../../mock-heroes';
import { NgIf, NgFor, UpperCasePipe } from '@angular/common';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, UpperCasePipe, NgFor, NgIf, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes= HEROES;
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
