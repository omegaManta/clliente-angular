import { Component, OnInit } from '@angular/core';
import { ServicioUsuarioService } from 'src/app/servicios/servicio-usuario.service';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {
  perfil: any;


  constructor(private serviciocliente: ServicioUsuarioService){}

   ngOnInit(): void {
    const token = localStorage.getItem('tokens-omega');
    if (token) {
      this.serviciocliente.verperfil(token).subscribe(
        res => {
          this.perfil = res.profile;
          console.log(token);
          console.log('Perfil del cliente', this.perfil);
        },
        error => {
          console.error('Error al obtener el perfil del usuario', error);
        }
      );
    }
   }





}
