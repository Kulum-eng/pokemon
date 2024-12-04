import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { CardPokemonComponent } from "../card-pokemon/card-pokemon.component";
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../models/pokemon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardPokemonComponent, CommonModule],
  templateUrl:'./home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private pokemonService: PokeApiService, private router: Router) { }
  pokemon: Pokemon[] = [];
  nameUser: any;
  ngOnInit(): void {
    const userJSON = localStorage.getItem('user');
    const user = userJSON ? JSON.parse(userJSON) : null;
    this.nameUser = user.name;
    this.pokemonService.getPokemons().subscribe({
      next: (next) => {
        console.log(next);
        for (let index = 0; index < next.results.length; index++) {
          this.pokemonService.getPokemonById(index).subscribe({
            next: (pokemon) => {
              this.pokemon.push({
                id: pokemon.id,
                name: pokemon.name,
                height: pokemon.height,
                weight: pokemon.weight,
                base_experience: pokemon.base_experience,
                sprite: pokemon.sprites.back_default
              });
            }
          });
        }
      }
    });

    console.log(this.pokemon);
  }

  searchPokemon(): void {
  }

  logout(){
    localStorage.removeItem("user");
    this.router.navigate(['/']);
  }
}
