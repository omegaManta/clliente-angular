import { Component, OnInit } from '@angular/core';
import { ReporteClienteService } from 'src/app/servicios/reporte-cliente.service';
import { ServicioUsuarioService } from 'src/app/servicios/servicio-usuario.service';

@Component({
  selector: 'app-reporte-cliente-kardex-cliente',
  templateUrl: './reporte-cliente-kardex-cliente.component.html',
  styleUrls: ['./reporte-cliente-kardex-cliente.component.css']
})
export class ReporteClienteKardexClienteComponent implements OnInit{
perfil: any;
p_periodo: string;
p_tipocar: string;
p_cli_prov: string;
p_tipo: string;
p_desde: Date;
p_hasta: Date;
clientes: any = [];



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



buscarkardexclientes(){
  const desde = this.p_desde.toString();
  const hasta = this.p_hasta.toString();
  this.reporte.kardexcliente(this.p_periodo,this.p_tipocar,this.p_cli_prov,this.p_tipo,
    desde,hasta).subscribe(
      res => {
        this.clientes = res;
      }
    )
}



}
