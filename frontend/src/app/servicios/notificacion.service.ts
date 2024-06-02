import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Noti, Obs } from '../interfaces/empresa/notificacion';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
API: String = 'http://localhost:1000'
  constructor(private http: HttpClient){}


notificacionpedido(compra: any){
  return this.http.post(this.API + '/notificacion-pedido',compra);
}


notificacionrecibo(compra: any){
  return this.http.post(this.API + '/notificacion-completada',compra);
}




}
