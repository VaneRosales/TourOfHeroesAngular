import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import { MessagesComponent } from "./messages/messages.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, FormsModule, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour de los Héroes';
}
