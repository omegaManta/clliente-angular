import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioUsuarioService } from 'src/app/servicios/servicio-usuario.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  inicioSesionForm: FormGroup;

  constructor(private fb: FormBuilder, private serviciocliente: ServicioUsuarioService,private router: Router){
    this.inicioSesionForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


ngOnInit(): void {
}


iniciar(){
  if (this.inicioSesionForm.valid) {
    const credentials = this.inicioSesionForm.value;
    this.serviciocliente.login(credentials).subscribe(
      res => {
        if(!res.error){
          localStorage.setItem('tokens-omega', res.token);
          this.success();
          this.router.navigate(['/home']);
        }else{
          this.error();
        }
      },
      error => {
        Swal.fire({
          position: 'top-end',
          width:400,
          icon: 'error',
          title: error,
          showConfirmButton: false,
          timer: 1500
        })
      }
    );
  }
}

success(){
  Swal.fire({
    position: 'top-end',
    width: 400,
    icon: 'success',
    title: 'Acceso permitido',
    showConfirmButton: false,
    timer: 1500
  })
}


error(){
  Swal.fire({
    position: 'top-end',
    width:400,
    icon: 'error',
    title: 'Usuario incorrecto',
    showConfirmButton: false,
    timer: 1500
  })
}





}
