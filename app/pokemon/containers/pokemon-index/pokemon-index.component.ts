import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PokemonService } from "../../pokemon.service";

@Component({
    selector: 'pokemon-index',
    styleUrls: ['pokemon-index.component.scss'],
    templateUrl: 'pokemon-index.html'
    
})

export class PokemonIndexComponent implements OnInit{
    pokemons: any[]
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private pokemonService: PokemonService
    ){}

    ngOnInit(){
        this.pokemonService
        .getPokemons()
        .subscribe((data: any[]) => this.pokemons = data);
        
    }
    goToPokemon(id :number){
        this.router.navigate(['/pokemons',id]);
    }

    //methods
    
}
