import { Component, OnInit } from '@angular/core';
import { ServicioEmpresaService } from 'src/app/servicios/servicio-empresa.service';
import { ServicioUsuarioService } from 'src/app/servicios/servicio-usuario.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Comentario } from 'src/app/interfaces/empresa/observacion';
import { Obs } from 'src/app/interfaces/empresa/notificacion';
import { NotificacionService } from 'src/app/servicios/notificacion.service';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';




@Component({
  selector: 'app-servicios-realizados-cliente',
  templateUrl: './servicios-realizados-cliente.component.html',
  styleUrls: ['./servicios-realizados-cliente.component.css']
})
export class ServiciosRealizadosClienteComponent implements OnInit {
perfil: any = [];
titulo: any;
categorias: any;
p:number = 1;
comentario: Comentario = {
  idob:0,
  idempresa:0,
  idpedido:0,
  comentario:''
}

noti: Obs = {
    nombre_empresa: '',
    ruc: '',
    requiere: '',
    comentario: '',
    tecnico_escogido: ''
}
completados: any = [];
pedidos: any = [];



constructor(private serviciocliente: ServicioUsuarioService,
  private servicioempresa: ServicioEmpresaService,
  private servicionotificacion:NotificacionService,
  private router: Router,private http: HttpClient){}




  ngOnInit(): void {
    const token = localStorage.getItem('tokens-omega');
    if(token){
      this.serviciocliente.recibosclientes(token).subscribe(
        res=>{
          this.perfil = res.profile;
        },
        error => {
          console.error('Error al obtener el perfil del usuario', error);
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
      this.serviciocliente.verconteotrabajos(token).subscribe(
        res=>{
          this.completados = res.profile;
        }
      );
      this.serviciocliente.verconteopedidos(token).subscribe(
        res=>{
          this.pedidos = res.profile;
        }
      );
    }
    this.vercategorias();
}


vercategorias(){
  this.servicioempresa.vercategorias().subscribe(
    res=>{
        this.categorias = res;
    }
  )
}


crearcomentario(idempresa:number,idpedido:number, 
  comentario:string,idob:number,nombre_empresa: String,
  ruc: String,requiere: String,tecnico_escogido: String){
 let publica = this.comentario = {
  idempresa:idempresa,
  idpedido:idpedido,
  comentario:comentario
 }
let envia = this.noti = {
  nombre_empresa: nombre_empresa,
  ruc: ruc,
  requiere:requiere,
  comentario: comentario,
  tecnico_escogido: tecnico_escogido
}

 if(publica){
  this.serviciocliente.crearcomentario(publica).subscribe(
    res=>{
         this.informacion();
    }
   )
 }else{
  this.error()
 }
}



descargarecibo(contratoUrl: string,nombre_empresa: string): void {
  this.http.get(contratoUrl, { responseType: 'blob' })
    .subscribe((data: Blob) => {
      const blob = new Blob([data], { type: 'application/pdf' });

      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `recibo-${nombre_empresa}.pdf`;
      link.click();

      document.body.removeChild(link);
    });
}


ir(){
  this.router.navigate(['/pedidos-cliente'])
}


informacion(){
  Swal.fire({
    position: 'top-end',
    width: 400,
    icon: 'info',
    title: 'Observacion publicada',
    showConfirmButton: false,
    timer: 3000
  })
}



error(){
  Swal.fire({
    position: 'top-end',
    width:400,
    icon: 'error',
    title: 'Haz una observacion',
    showConfirmButton: false,
    timer: 1500
  })
}

}
