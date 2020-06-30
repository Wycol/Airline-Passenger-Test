import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PokemonService } from "../../pokemon.service";

@Component({
    selector: 'pokemon-detail',
    templateUrl: 'pokemon-detail.html',
    styleUrls: ['pokemon-detail.component.scss']
})

export class PokemonDetailComponent implements OnInit{
    pokemon
    constructor (
        private router: Router,
        private route: ActivatedRoute,
        private pokemonService: PokemonService)
        {}

    ngOnInit(){
        this.route.params
        .switchMap((data: any) =>  this.pokemonService.getPokemon(data.id))
        .subscribe((data: any) => this.pokemon = data)

     }

     goBack(){
        this.router.navigate(['/pokemons'])
    }
    next(id :number){
        id++;
        this.router.navigate(['/pokemons/'+id])
    }
    previous(id :number){
        id--
        this.router.navigate(['/pokemons/'+id])
    }
}