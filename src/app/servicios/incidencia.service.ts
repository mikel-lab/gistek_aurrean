import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Incidencia } from '../modelos/incidencia';

@Injectable({
  providedIn: 'root'
})
export class IncidenciaService {

  constructor(
    public _http: HttpClient
  ) { }

  GetIncidencias(): Observable<any>{

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get('http://127.0.0.1:8000/incidencias', {headers: headers});
    //return this._http.get<Incidencia[]>('http://127.0.0.1:8000/incidencias');
  }
}
