import { Component, OnInit } from '@angular/core';
import { Incidencia } from 'src/app/modelos/incidencia';
import { IncidenciaService } from 'src/app/servicios/incidencia.service';

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.css'],
  providers: [IncidenciaService]
})
export class IncidenciaComponent implements OnInit {

  public page_title: string;
  public incidencias;
  
  constructor(
    private _incidenciaService: IncidenciaService
  ) {
    this.page_title= "Lista de incidencias de Gistek:";
   }


  ngOnInit(): void {

    this.getIncidencias();
      
  }

  getIncidencias(){
    this._incidenciaService.GetIncidencias().subscribe(
      response=>{
        this.incidencias = response.incidencias;
      }
    )
  }
}
