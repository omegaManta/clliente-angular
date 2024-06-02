import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpresaService } from 'src/app/servicios/servicio-empresa.service';
import { ServicioInformacionService } from 'src/app/servicios/servicio-informacion.service';
import { ServicioUsuarioService } from 'src/app/servicios/servicio-usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  nombres: any;
  names: any;
  perfil: any;

 
constructor(
  private router: Router,
  private servicio: ServicioEmpresaService,
  private servicio2: ServicioInformacionService,
  private serviciocliente: ServicioUsuarioService
  ){}
ngOnInit(): void {
  this.vernombres();
  this.verfondo();
  const token = localStorage.getItem('tokens-omega');
    if (token) {
      this.serviciocliente.verperfil(token).subscribe(
        res => {
          this.perfil = res.profile;
          //console.log(token);
          console.log('Perfil del cliente', this.perfil);
        },
        error => {
          console.error('Error al obtener el perfil del usuario', error);
        }
      );
    }
}

vernombres(){
  this.servicio2.vernombres().subscribe(
    res =>{
      this.nombres = res;
    }
  )
}

verfondo(){
  this.servicio2.vernombres().subscribe(
    res =>{
      this.names = res;
    }
  )
}


exit(): void {
  localStorage.removeItem('tokens-omega');
  this.success();
  this.router.navigate(['/login'])
}



success(){
  Swal.fire({
    position: 'top-end',
    width: 400,
    icon: 'success',
    title: 'La sesion se cerro sastifactoriamente',
    showConfirmButton: false,
    timer: 1500
  })
}




}
