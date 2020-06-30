import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
const PASSENGER_API: string = '/api/passengers'
const POKEMON_API: string = 'http://localhost:3000/pokemons'
@Injectable()
export class PokemonService {
  
    constructor( private http: Http){}


    getPokemons(): Observable<any[]> {
      return this.http
        .get(POKEMON_API)
        .map((response: Response) => response.json());
    }

    getPokemon(id: number): Observable<any> {
      return this.http
        .get(`${POKEMON_API}/${id}`)
        .map((response: Response) => {
            return response.json()
        });
    }

    updatePassenger(passenger: any): Observable<any> {
      let headers = new Headers({
          'Content-Type': 'application/json'
      });
      let options = new RequestOptions({
        headers: headers
      })
      return this.http
        .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
        .map((response: Response) => response.json());
    }

    removePassenger(passenger: any): Observable<any> {
      return this.http
        .delete(`${PASSENGER_API}/${passenger.id}`)
        .map((response: Response) => response.json());
    }

    addPassenger(passenger: any): Observable<any[]> {
      return this.http
        .post(PASSENGER_API, passenger)
        .map((response: Response) => response.json());
    }
}