import { Component, OnInit } from '@angular/core';
import { ReporteClienteService } from 'src/app/servicios/reporte-cliente.service';
import { ServicioUsuarioService } from 'src/app/servicios/servicio-usuario.service';

@Component({
  selector: 'app-reporte-cliente-kardex-proveedor',
  templateUrl: './reporte-cliente-kardex-proveedor.component.html',
  styleUrls: ['./reporte-cliente-kardex-proveedor.component.css']
})
export class ReporteClienteKardexProveedorComponent implements OnInit{
perfil: any;
p_periodo: string;
p_tipocar: string;
p_categorias: string;
p_tipo: string;
p_desde: Date;
p_hasta: Date;
proveedores: any = [];


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



buscarkardexproveedores(){
  const desde = this.p_desde.toString();
  const hasta = this.p_hasta.toString();
  this.reporte.kardexproveedor(this.p_periodo,this.p_tipocar,
    this.p_categorias,this.p_tipo,desde,hasta).subscribe(
      res => {
        this.proveedores = res;
      }
    )
}




}
