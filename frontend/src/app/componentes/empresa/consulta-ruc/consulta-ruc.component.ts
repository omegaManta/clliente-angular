import { Component, OnInit } from '@angular/core';
import { ServicioEmpresaService } from 'src/app/servicios/servicio-empresa.service';
import { ServicioInformacionService } from 'src/app/servicios/servicio-informacion.service';

@Component({
  selector: 'app-consulta-ruc',
  templateUrl: './consulta-ruc.component.html',
  styleUrls: ['./consulta-ruc.component.css']
})
export class ConsultaRucComponent implements OnInit {
p: number = 1;
personas: any= [];
ruc:String;
social: any;
productos:any;
grandes: any = [];

constructor(
  private servicio: ServicioEmpresaService,
  private service: ServicioInformacionService
){

}
ngOnInit(): void {
 this.verredesociales();
 this.verproductos();   
}


buscar(){
  this.servicio.buscarPorRuc(this.ruc).subscribe(
     res => {
       this.personas = res;
       this.grandes = res;
       console.log(res);
    }
  )
}



verredesociales(){
  this.service.verredsocial().subscribe(
    res  =>{
      this.social = res
    }
  )
}

verproductos(){
  this.servicio.verEnlace().subscribe(
    res  =>{
      this.productos = res
    }
  )
}


}
