import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ServicioEmpresaService } from 'src/app/servicios/servicio-empresa.service';

@Component({
  selector: 'app-actual-info',
  templateUrl: './actual-info.component.html',
  styleUrls: ['./actual-info.component.css']
})
export class ActualInfoComponent implements OnInit {




  constructor(private servicio: ServicioEmpresaService,
    private router: Router
    ){}
  ngOnInit(): void {
    
}



}
