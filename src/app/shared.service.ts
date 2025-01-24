import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviornment } from '../envrionments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
public pokeMonNames=[
  {
      "name":"bulbasaur",
      "id":1
},
{
  "name":"ivysaur",
  "id":2
},
{
  "name":"venusaur",
  "id":3
},
{
  "name":"charmander",
  "id":4
},
{
  "name":"charmeleon",
  "id":5
},
{
  "name":"charizard",
  "id":6
},
{
  "name":"squirtle",
  "id":7
},
{
  "name":"wartortle",
  "id":8
},
{
  "name":"blastoise",
  "id":9
},
{
  "name":"caterpie",
  "id":10
},
{
  "name":"metapod",
  "id":11
},
{
  "name":"butterfree",
  "id":12
},
{
  "name":"weedle",
  "id":13
},
{
  "name":"kakuna",
  "id":14
},
{
  "name":"beedrill",
  "id":15
},
{
  "name":"pidgey",
  "id":16
}
]
  constructor(private http:HttpClient,
  ) { }

  public getPokemon(id: number): Observable<any> {
    const apiUrl = enviornment.apiEndPoint + '/pokemon/'
    return this.http.get(apiUrl + id)
  }
}
