import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpresaService } from 'src/app/servicios/servicio-empresa.service';
import { ServicioInformacionService } from 'src/app/servicios/servicio-informacion.service';
import { ServicioTecnicoService } from 'src/app/servicios/servicio-tecnico.service';
import { ServicioUsuarioService } from 'src/app/servicios/servicio-usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  categorias: any;
  servicios: any;
  productos: any;
  descripcion = '';
  social: any;
  nombres: any;
  p: number = 1;
  nombreEmpresa: string = '';
  contacto: string = '';
  telefono: string = '';
  perfil: any;
  contador:  any = [];
  pedidos: any = [];
  completados: any = [];
  anuncios: any = [];

  
  constructor(private servicio:ServicioTecnicoService,
    private servicio2: ServicioEmpresaService,
    private servicio3: ServicioInformacionService,
    private serviciocliente: ServicioUsuarioService,
    private active: ActivatedRoute,
    private router: Router
    ){}
  ngOnInit(): void {
  this.veranuncios();
  this.vercategorias();
  this.verServicios();
  this.vercontador();
  this.vernombres();
  this.verRedSocial();
  this.verEnlaces();
  const token = localStorage.getItem('tokens-omega');
    if (token) {
      this.serviciocliente.verperfil(token).subscribe(
        res => {
          this.perfil = res.profile;
          //console.log(token);
          //console.log('Perfil del cliente', this.perfil);
        },
        error => {
          console.error('Error al obtener el perfil del usuario', error);
        }
      );
      this.serviciocliente.verconteopedidos(token).subscribe(
        res=>{
          this.pedidos = res.profile;
        }
      );
      this.serviciocliente.verconteotrabajos(token).subscribe(
        res=>{
          this.completados = res.profile;
        }
      )
    }
}

 verServicios(){
  this.servicio.verServicios().subscribe(
    res  => {
      this.servicios = res
    }
  )
}


vercontador(){
  this.servicio2.vercontadorservicios().subscribe(
    res=>{
      this.contador = res;
    }
  )
}

buscar(){
this.servicio.buscar(this.descripcion).subscribe(
  res=>{
  this.servicios = res;
  }
)
}

vernombres(){
  this.servicio3.vernombres().subscribe(
    res=>{
       this.nombres = res;
    }
  )
}


verRedSocial(){
    this.servicio3.verredsocial().subscribe(
      res=>{
      this.social = res
      console.log(res)
      }
    )
}


verEnlaces(){
  this.servicio2.verEnlace().subscribe(
    res =>{
     this.productos = res;
    }
  )
}


vercategorias(){
  this.servicio2.vercategorias().subscribe(
    res=>{
        this.categorias = res;
    }
  )
}

ir(){
  this.router.navigate(['/pedidos-cliente'])
}

ir2(){
  this.router.navigate(['/servicio-realizado-cliente'])
}

ir3(){
  this.router.navigate(['/favoritos'])
}


veranuncios(){
  this.servicio2.veranuncio().subscribe(
    res => {
          this.anuncios = res;
    }
  )
}


}
