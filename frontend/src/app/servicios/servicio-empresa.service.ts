import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Pedido } from '../interfaces/empresa/pedido';


@Injectable({
  providedIn: 'root'
})
export class ServicioEmpresaService {
API: String = 'https://web-service-production-2145.up.railway.app'
API_CEDULA: String = 'https://factura.omegas-apps.com:3005/administracion'
API_RUC: String = 'https://vps.ecuacarvip.com:3001/generales'
comparar: String = 'https://vps.ecuacarvip.com:3001/generales/obtener_establecimientos'

  constructor(private http:HttpClient) { }




verEmpresa(){
  return this.http.get(this.API + '/empresa')
}


verEnlace(){
  return this.http.get(this.API + '/enlaces')
}

buscarPorCedula(cedula: String): Observable<any> {
  return this.http.get(this.API_CEDULA + '/getCedula/' + cedula)
}

buscarPorRuc(ruc:String){
return this.http.get(this.API_RUC + '/obtener_establecimientos/'+ ruc)
}

//servicios
detalleservicio(idservicio: number){
  return this.http.get(this.API + '/detalle-servicio/' +idservicio)
}

vercontadorservicios(){
  return this.http.get(this.API + '/conteo-servicio');
}


//anuncios
anuncios(){
  return this.http.get(this.API + '/anuncios')
}


//categorias 
vercategorias(){
  return this.http.get(this.API + '/categorias')
}


detallecategoria(idcategoria: number){
  return this.http.get(this.API + '/detalle-categoria/' + idcategoria)
}


//tecnicos
vertecnicos(){
  return this.http.get(this.API + '/tecnicos')
}


//pedidos 
crearpedido(pedido: Pedido){
  return this.http.post(this.API + '/pedido',pedido)
}


//clientes
vercliente(nombre_empresa: string){
  return this.http.get(this.API + '/cliente/' +nombre_empresa)
}



//pedidos cliente 
eliminarpedido(idpedido: number){
  return this.http.delete(this.API + '/pedir/' +idpedido)
}



//comentarios cliente
eliminarcomentario(idob:number){
  return this.http.delete(this.API +'/observacion/' +idob)
}



//anuncios
veranuncio(){
  return this.http.get(this.API + '/publicidad');
}






}