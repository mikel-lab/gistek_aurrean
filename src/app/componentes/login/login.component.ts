import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public page_title: string;
  public usuario: Usuario;
  
  constructor(
    private _userService: UserService
  ) {
    this.page_title= "Inicia sesión con tu usuario";
    this.usuario= new Usuario(1,"","",""); //creamos un objeto usuario para luego poder usarlo.
   }

  ngOnInit(): void {
  }

  onSubmit(form){
    this._userService.login(this.usuario).subscribe(

      response=>{
        //this.usuario = response
      }
    )
  }

}
