import { Component, OnInit } from '@angular/core';
import { ReporteClienteService } from 'src/app/servicios/reporte-cliente.service';
import { ServicioUsuarioService } from 'src/app/servicios/servicio-usuario.service';

@Component({
  selector: 'app-reporte-cliente-costo-inventario',
  templateUrl: './reporte-cliente-costo-inventario.component.html',
  styleUrls: ['./reporte-cliente-costo-inventario.component.css']
})
export class ReporteClienteCostoInventarioComponent implements OnInit{
perfil: any;
p_periodo: string;
p_desde: Date;
p_hasta: Date;
p_categorias: string;
p_bodegas: string;
p_iva: string;
costos: any = [];







constructor(private reporte: ReporteClienteService,private cliente: ServicioUsuarioService){}
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



buscarcostos(){
  const desde = this.p_desde.toString();
  const hasta = this.p_hasta.toString();
  this.reporte.costoinventario(this.p_periodo,desde,hasta,this.p_categorias,this.p_bodegas,this.p_iva).
  subscribe(
    res =>{
         this.costos = res;
    }
  )

}







}
