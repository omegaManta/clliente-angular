import { Component, OnInit } from '@angular/core';
import { ReporteClienteService } from 'src/app/servicios/reporte-cliente.service';
import { ServicioUsuarioService } from 'src/app/servicios/servicio-usuario.service';

@Component({
  selector: 'app-reporte-cliente-existencia',
  templateUrl: './reporte-cliente-existencia.component.html',
  styleUrls: ['./reporte-cliente-existencia.component.css']
})
export class ReporteClienteExistenciaComponent implements OnInit{
perfil: any;
p_periodo: string;
p_tipo: string;
p_producto: string;
existencias: any = [];





  constructor(private reporte: ReporteClienteService, private cliente: ServicioUsuarioService){}
  ngOnInit(): void {
  const token = localStorage.getItem('tokens-omega');
  if(token){
   this.cliente.verperfil(token).subscribe(
    res => {
      this.perfil = res.profile;
    }
   )
  }
}



buscarexistencias(){
  this.reporte.existenciaproducto(this.p_periodo,this.p_tipo,this.p_producto).
  subscribe(
    res =>{
        this.existencias = res;
    }
  )
}



}
