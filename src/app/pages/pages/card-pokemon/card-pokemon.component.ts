import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-card-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './card-pokemon.component.html',
  styleUrl: './card-pokemon.component.css'
})
export class CardPokemonComponent {
  @Input() pokemon: Pokemon = {
    id: 0,
    name: '',
    height: 0,
    weight: 0,
    base_experience: 0,
    sprite:''
  }
}
