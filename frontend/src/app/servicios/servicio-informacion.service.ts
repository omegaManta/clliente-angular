import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicioInformacionService {
API: String = 'https://web-service-production-2145.up.railway.app'
  constructor(private http:HttpClient) { }
  
  //informacion de la empresa
  vernombres(){
    return this.http.get(this.API + '/unico')
  }
 
  verredsocial(){
    return this.http.get(this.API + '/contactos')
  }


  //contratos
  mostrarcontrato(){
    return this.http.get(this.API + '/archivo')
  }


  //video de ayuda para los clientes
mostrarvideoayuda(){
  return this.http.get(this.API + '/ayuda')
}


}
