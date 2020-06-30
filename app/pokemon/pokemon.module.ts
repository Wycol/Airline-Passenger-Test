import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

//Services
import { PokemonService } from "./pokemon.service";
//Componentes
import { PokemonIndexComponent } from "./containers/pokemon-index/pokemon-index.component";
import { PokemonDetailComponent } from "./containers/pokemon-detail/pokemon-detail.component";


const routes: Routes = [
    {
        path: 'pokemons',
        children: [
            { path: '', component: PokemonIndexComponent},
            { path: ':id', component: PokemonDetailComponent}
        ]
    }
]
@NgModule({
    declarations: [
        PokemonIndexComponent,
        PokemonDetailComponent
    ],
    imports: [
        CommonModule, 
        HttpModule,
        FormsModule,
        RouterModule.forChild(routes)

    ],
    providers: [
        PokemonService
    ]
})
export class PokemonModule {
}