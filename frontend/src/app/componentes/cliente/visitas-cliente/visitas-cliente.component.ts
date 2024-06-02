import { Component, OnInit } from '@angular/core';
import { ServicioUsuarioService } from 'src/app/servicios/servicio-usuario.service';

@Component({
  selector: 'app-visitas-cliente',
  templateUrl: './visitas-cliente.component.html',
  styleUrls: ['./visitas-cliente.component.css']
})
export class VisitasClienteComponent implements OnInit{
perfil:any = [];
p:number = 1;

  constructor(private serviciovisitas: ServicioUsuarioService){}
  ngOnInit(): void {
    const token = localStorage.getItem('tokens-omega')
    if(token){
      this.serviciovisitas.verperfilvisitas(token).subscribe(
        res=>{
            this.perfil = res.profile;
        },
        error => {
          console.error('Error al obtener el perfil del usuario', error);
        }
      )
    }
}

}