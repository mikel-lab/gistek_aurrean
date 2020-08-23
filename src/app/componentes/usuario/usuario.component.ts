import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public page_title: string;
  
  constructor() {
    this.page_title= "Hola usuario";
   }

  ngOnInit(): void {
  }

}
