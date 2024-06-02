import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpresaService } from 'src/app/servicios/servicio-empresa.service';
import { ServicioUsuarioService } from 'src/app/servicios/servicio-usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comentario-cliente',
  templateUrl: './comentario-cliente.component.html',
  styleUrls: ['./comentario-cliente.component.css']
})
export class ComentarioClienteComponent implements OnInit{
perfil: any = [];
titulo: any;


constructor(private activo: ActivatedRoute, private serviciocliente:ServicioUsuarioService,
  private serviciocomentario: ServicioEmpresaService,
  private router: Router){}  
ngOnInit(): void {
  const params = this.activo.snapshot.params;
  const token = localStorage.getItem('tokens-omega');
  if(params && token){
   this.serviciocliente.verdetalleobservacion(params['idpedido'],token).subscribe(
    res=>{
        this.perfil = res.profile;
    },
    error =>{
     console.log(error);
    }
   );
   this.serviciocliente.verperfil(token).subscribe(
    res => {
      this.titulo = res.profile;
      console.log(token);
      console.log('Perfil del cliente', this.perfil);
    },
    error => {
      console.error('Error al obtener el perfil del usuario', error);
    }
  );
  }
    
}

eliminarcomentario(idob:number){
this.serviciocomentario.eliminarcomentario(idob).subscribe(
  res=>{
    Swal.fire({
      position: 'top-end',
      width: 400,
      icon: 'warning',
      title: 'Comentario eliminado',
      showConfirmButton: false,
      timer: 1500
    });
    window.location.reload();
  }
)  
}

}
