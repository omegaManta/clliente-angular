import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificacionService } from 'src/app/servicios/notificacion.service';
import { PlanService } from 'src/app/servicios/pago/plan.service';
import { ServicioInformacionService } from 'src/app/servicios/servicio-informacion.service';
import { ServicioUsuarioService } from 'src/app/servicios/servicio-usuario.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  contrato: any;
  ayuda: any;
  selectPdf: File;
  planes: any;
  empresaForm: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private servicio: ServicioUsuarioService,
     private router: Router, private planservicio: PlanService,
     private serviciocontrato: ServicioInformacionService,
     private servicioemail: NotificacionService,
     private http: HttpClient,
    private formBuilder: FormBuilder){
      this.empresaForm = this.formBuilder.group({
        idplan: ['',Validators.required],
        ruc: ['',Validators.compose([Validators.required, Validators.minLength(13)
          , Validators.maxLength(20)])],
        email: ['', Validators.compose([Validators.required,Validators.pattern(this.emailPattern)])],
        telefono: ['', Validators.compose([Validators.required, Validators.maxLength(10),
          Validators.minLength(10)])
      ],
        direccion: ['', Validators.compose([Validators.required,
          Validators.minLength(10)])],
        nombre_empresa: ['',[Validators.required, Validators.maxLength(100),
          Validators.minLength(3)]
      ],
        contacto: ['', Validators.compose([Validators.required, Validators.maxLength(70),
          Validators.minLength(3)])
      ],
      ciudad: ['', Validators.compose([Validators.required, Validators.maxLength(60),
        Validators.minLength(3)])
    ],
    password: ['', Validators.compose([Validators.required, Validators.maxLength(20),
      Validators.minLength(8)])
  ],   
  contrato: ['',Validators.compose([Validators.required])],
      })
  }

   ngOnInit(): void {
  this.mostrarcontrato();
  this.mostrarvideoayuda();
  this.verplanes();
}


onFileChange(event): void {
  if (event.target.files && event.target.files.length > 0) {
    this.selectPdf = event.target.files[0];
  }
}


crearEmpresa(){
  if(this.empresaForm.valid && this.selectPdf instanceof Blob){
    const formData = new FormData();
    formData.append('ruc', this.empresaForm.get('ruc').value);
    formData.append('email', this.empresaForm.get('email').value);
    formData.append('telefono', this.empresaForm.get('telefono').value);
    formData.append('direccion', this.empresaForm.get('direccion').value);
    formData.append('nombre_empresa', this.empresaForm.get('nombre_empresa').value);
    formData.append('contacto', this.empresaForm.get('contacto').value);
    formData.append('ciudad', this.empresaForm.get('ciudad').value);
    formData.append('password', this.empresaForm.get('password').value);
    formData.append('idplan', this.empresaForm.get('idplan').value);
    formData.append('file', this.selectPdf);
    this.servicio.crearEmpresa(formData).subscribe(
     res => {
      this.router.navigate([''])
     }
    )
    this.informacion()
   }else{
     this.error()
   }
}






informacion(){
  Swal.fire({
    position: 'top-end',
    width: 400,
    icon: 'info',
    title: 'Espera que te acepten la cuenta',
    showConfirmButton: false,
    timer: 1500
  })
}



error(){
  Swal.fire({
    position: 'top-end',
    width:400,
    icon: 'error',
    title: 'Datos incompletos',
    showConfirmButton: false,
    timer: 1500
  })
}


verplanes(){
  this.servicio.verplanes().subscribe(
    res=>{
       this.planes = res;
    }
  )
}

hacerpagostripe(){
  this.router.navigate(['/stripe'])
}

mostrarcontrato(){
  this.serviciocontrato.mostrarcontrato().subscribe(
    res =>{
           this.contrato = res;
    }
  )
}




descargarContrato(contratoUrl: string): void {
  this.http.get(contratoUrl, { responseType: 'blob' })
    .subscribe((data: Blob) => {
      const blob = new Blob([data], { type: 'application/pdf' });

      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'contrato.pdf';
      link.click();

      document.body.removeChild(link);
    });
}


mostrarvideoayuda(){
  this.serviciocontrato.mostrarvideoayuda().subscribe(
    res =>{
      this.ayuda = res;
    }
  )
}


}