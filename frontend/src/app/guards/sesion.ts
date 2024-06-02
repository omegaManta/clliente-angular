import { inject } from "@angular/core";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';

export const sesion = (): boolean =>{
    const router = inject(Router)
    if (localStorage.getItem('tokens-omega')) {
      return true;
    } else {
      advertencia();
      router.navigate(['/login']);
      return false;
    }
}

function advertencia(){
  Swal.fire({
    position: 'top-end',
    width: 400,
    icon: 'warning',
    title: 'Tienes que iniciar sesion para acceder',
    showConfirmButton: false,
    timer: 1500
  })
}