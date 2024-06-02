import { Component, OnInit } from '@angular/core';
import { ReporteClienteService } from 'src/app/servicios/reporte-cliente.service';
import { ServicioUsuarioService } from 'src/app/servicios/servicio-usuario.service';

@Component({
  selector: 'app-reporte-cliente-kardex-producto',
  templateUrl: './reporte-cliente-kardex-producto.component.html',
  styleUrls: ['./reporte-cliente-kardex-producto.component.css']
})
export class ReporteClienteKardexProductoComponent implements OnInit{
perfil: any;
p_periodo: string;
p_producto: string;
p_desde: Date;
p_hasta: Date;
p_bodegas: string;
productos: any = [];


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



buscarkardexproductos(){
  const desde = this.p_desde.toString();
  const hasta = this.p_hasta.toString();
  this.reporte.kardexproducto(this.p_periodo,this.p_producto,desde,hasta,
    this.p_bodegas).subscribe(
      res => {
            this.productos = res;
      }
    )
}





}
