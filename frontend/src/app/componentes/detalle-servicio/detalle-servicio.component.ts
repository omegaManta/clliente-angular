import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpresaService } from 'src/app/servicios/servicio-empresa.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ServicioUsuarioService } from 'src/app/servicios/servicio-usuario.service';
import { NotificacionService } from 'src/app/servicios/notificacion.service';
import { Noti } from 'src/app/interfaces/empresa/notificacion';

@Component({
  selector: 'app-detalle-servicio',
  templateUrl: './detalle-servicio.component.html',
  styleUrls: ['./detalle-servicio.component.css']
})
export class DetalleServicioComponent implements OnInit {
  categorias: any;
  anuncios: any = [];
  detalle: any = [];
  msm = '';
  pedidoForm: FormGroup;
  perfil: any;
  pedidos: any = [];

  noti: Noti = {
    email: '',
    nombre_empresa: '',
    ruc: '',
    descripcion:'',
    foto_url: ''
  }

  favorito: any = {
    idempresa: 0,
    idservicio:0
  }


  constructor(private active: ActivatedRoute, private router: Router,
    private serviciodetalle: ServicioEmpresaService,
    private serviciocliente: ServicioUsuarioService,
    private servicionotificaion: NotificacionService,
    private formBuilder: FormBuilder
    ){
      this.pedidoForm = this.formBuilder.group({
        idempresa:['', Validators.compose([Validators.required])],
        idservicio: ['', Validators.compose([Validators.required])]
      })
     
 


    }
  ngOnInit(): void {
       const params = this.active.snapshot.params
       if(params){
         this.serviciodetalle.detalleservicio(params['idservicio']).subscribe(
          res=>{
            this.detalle = res[0];
            this.pedidoForm.patchValue({
              idservicio: this.detalle.idservicio
            });
          }
         )
       }
       this.veranuncios(); 
       this.vercategorias();
       const token = localStorage.getItem('tokens-omega');
    if (token) {
      this.serviciocliente.verperfil(token).subscribe(
        res => {
          this.perfil = res.profile;
          console.log(token);
          console.log('Perfil del cliente', this.perfil);
          this.pedidoForm.patchValue({
            idempresa: this.perfil.idempresa
          });
        },
        error => {
          console.error('Error al obtener el perfil del usuario', error);
        }
      );
      this.serviciocliente.verconteopedidos(token).subscribe(
        res=>{
          this.pedidos = res.profile;
        }
      )
    }
}


veranuncios(){
  this.serviciodetalle.anuncios().subscribe(
    res=>{
     this.anuncios = res;
    }
  )
}



enviarmensaje(telefono: String,descripcion: string, msm: string){
  const numero_original = '+593' + telefono
  const cuerpo = 'Servicio: ' + descripcion + '. ' + msm
  const enlace = 'https://wa.me/' + numero_original + '?text=' + encodeURIComponent(cuerpo)
  window.open(enlace,"_blank")
}

vercategorias(){
  this.serviciodetalle.vercategorias().subscribe(
    res=>{
      this.categorias = res;
    }
  )
}




crearpedido() {
  if (this.pedidoForm.valid) {
    this.serviciodetalle.crearpedido(this.pedidoForm.value)
      .subscribe(
        res => {
          this.informacion();
          window.location.reload();
        }
       )
  } else {
    this.error();
  }
}


crearfavorito(idempresa: number,idservicio: number){
  let envia = this.favorito = {
    idempresa: idempresa,
    idservicio: idservicio
  }
this.serviciocliente.creardeseo(envia).subscribe(
  res => {
    this.informacion2();
  }
)
}


ir(){
  this.router.navigate(['/pedidos-cliente'])
}

informacion(){
  Swal.fire({
    position: 'top-end',
    width: 400,
    icon: 'info',
    title: 'Añadido a tu carrito de compras',
    showConfirmButton: false,
    timer: 3000
  })
}


informacion2(){
  Swal.fire({
    position: 'top-end',
    width: 400,
    icon: 'info',
    title: 'Añadido a tu lista de deseos',
    showConfirmButton: false,
    timer: 3000
  })
}



error(){
  Swal.fire({
    position: 'top-end',
    width:400,
    icon: 'error',
    title: 'Escoge un vendedor',
    showConfirmButton: false,
    timer: 1500
  })
}



}
