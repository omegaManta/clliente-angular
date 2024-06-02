import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpresaService } from 'src/app/servicios/servicio-empresa.service';

@Component({
  selector: 'app-detalle-categoria',
  templateUrl: './detalle-categoria.component.html',
  styleUrls: ['./detalle-categoria.component.css']
})
export class DetalleCategoriaComponent implements OnInit{
  servicios: any = [];
  categoria: any;
  p: number = 1;
  constructor(private serviciodetallecategoria: ServicioEmpresaService,private active: ActivatedRoute,
    private router: Router){}
  ngOnInit(): void {
   const params = this.active.snapshot.params
   if(params){
      this.serviciodetallecategoria.detallecategoria(params['idcategoria']).subscribe(
        res=>{
            this.servicios = res;
            this.categoria = res[0];
        }
      )
   } 
}



}
