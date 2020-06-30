import { NgModule} from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";


import { AppComponent} from "./app.component";
import { HomeComponent} from "./home.component";

import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { NotFoundComponent } from './not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: '**', component: NotFoundComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    PassengerDashboardModule,
    PokemonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}