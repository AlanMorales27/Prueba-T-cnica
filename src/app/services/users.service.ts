import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private api_url:string = "https://jsonplaceholder.typicode.com/users";

  users: User[];

  constructor(private http: HttpClient) {
    this.users = [];
  }

//Obtener los usuarios del api y adaptarlos al modelo de datos User[]
  getUsers(): Observable<User[]> {
    return this.http.get<any[]>(this.api_url)
    //Recorre los datos obtenidos y los acopla al modelo de datos
    .pipe(
      map(users => users.map(user => ({
        id: user.id,
        name: user.name,
        user: user.username,
        email: user.email,
        city: user.address.city,
        company: user.company.name
      })))
    );
  }
}
