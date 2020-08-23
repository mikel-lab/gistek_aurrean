import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuario';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public _http: HttpClient //variable para poder utilizar los métodos de http.
  ) { }

  login(user){
    let json = JSON.stringify(user); //convertimos datos del usuario del formulario en un string
    let params = 'json=' + json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post('http://127.0.0.1:8000/login', params, {headers: headers});
  }
}
