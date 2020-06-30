import { Passenger } from "./models/passenger.interface";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
PassengerCountComponent
const PASSENGER_API: string = "/api/passengers";

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {}
  get_hola;

  getPassengers(): Observable<Passenger[]> {
    return this.http
      .get(PASSENGER_API)
      .map((response: Response) => response.json());
  }

  getPassenger(id: number): Observable<Passenger> {
    return this.http
      .get(`${PASSENGER_API}/${id}`)
      .map((response: Response) => response.json());
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    let headers = new Headers({
      "Content-Type": "application/json",
    });
    let options = new RequestOptions({
      headers: headers,
    });
    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
      .map((response: Response) => response.json());
  }

  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .map((response: Response) => response.json());
  }

  addPassenger(passenger: Passenger): Observable<Passenger[]> {
    return this.http
      .post(PASSENGER_API, passenger)
      .map((response: Response) => response.json());
  }
}