import { Component, OnInit } from '@angular/core';
import { ServicioUsuarioService } from 'src/app/servicios/servicio-usuario.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit{
 deseos: any = [];
 p:number = 1;
 perfil: any;


  constructor(private serviciocliente: ServicioUsuarioService){}
  ngOnInit(): void {
  const token = localStorage.getItem('tokens-omega');
  if(token){
     this.serviciocliente.deseosclientes(token).subscribe(
      res => {
         this.deseos = res.profile;
      }
     );
     this.serviciocliente.verperfil(token).subscribe(
      res => {
        this.perfil = res.profile;
      }
     )
  }
}



}
