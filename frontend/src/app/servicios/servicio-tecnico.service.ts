import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioTecnicoService {
API: String = 'https://web-service-production-2145.up.railway.app'
  constructor(private http: HttpClient) { }

buscar(descripcion:String){
  return this.http.get(this.API + '/servicio/' + descripcion)
}

verServicios(){
  return this.http.get(this.API + '/servicios')
}

}
