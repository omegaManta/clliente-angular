import { Component , OnInit} from '@angular/core';
import { Consulta } from 'src/app/interfaces/empresa/consulta';
import { ServicioEmpresaService } from 'src/app/servicios/servicio-empresa.service';
import { ServicioInformacionService } from 'src/app/servicios/servicio-informacion.service';


@Component({
  selector: 'app-consulta-cedula',
  templateUrl: './consulta-cedula.component.html',
  styleUrls: ['./consulta-cedula.component.css']
})
export class ConsultaCedulaComponent implements OnInit {
  personas: Consulta[] = [];
  cedula:String;
  p: number = 1;
  index: number = 1;
  social: any;
  productos:any;


  constructor(
    private servicio: ServicioEmpresaService,
    private service: ServicioInformacionService
  ){

  }
  ngOnInit(): void {
  this.veredessociales();
  this.verproductos();
}


buscar(){
  this.servicio.buscarPorCedula(this.cedula).subscribe(
    res => {
       this.personas = [res];
    }
  );
}

verproductos(){
  this.servicio.verEnlace().subscribe(
    res =>{
      this.productos = res
    } 
  )
}


veredessociales(){
  this.service.verredsocial().subscribe(
    res =>{
      this.social = res
    }
  )
}


}
