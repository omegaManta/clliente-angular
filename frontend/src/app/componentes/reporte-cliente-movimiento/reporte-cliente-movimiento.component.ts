import { Component, OnInit } from '@angular/core';
import { ReporteClienteService } from 'src/app/servicios/reporte-cliente.service';
import { ServicioUsuarioService } from 'src/app/servicios/servicio-usuario.service';

@Component({
  selector: 'app-reporte-cliente-movimiento',
  templateUrl: './reporte-cliente-movimiento.component.html',
  styleUrls: ['./reporte-cliente-movimiento.component.css']
})
export class ReporteClienteMovimientoComponent implements OnInit{
perfil: any;
p_periodo: string;
p_desde: Date;
p_hasta: Date;
p_bodegas: string;
p_categorias: string;
movimientos: any = [];



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



buscarmovimientos(){
  const desde = this.p_desde.toString();
  const hasta = this.p_hasta.toString();
  this.reporte.movimiento(this.p_periodo,desde,hasta,
    this.p_bodegas,this.p_categorias).subscribe(
      res => {
           this.movimientos = res;
      }
    )
}


}
