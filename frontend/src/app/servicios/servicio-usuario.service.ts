import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../interfaces/usuario';
import {Observable} from 'rxjs';
import { Comentario } from '../interfaces/empresa/observacion';


@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {
API: string = 'https://web-service-production-2145.up.railway.app'
user: User[];
  constructor(private http:HttpClient) { }

  login(login: any): Observable<any> {
    return this.http.post(`${this.API}/sesion`, login);
  }

crearEmpresa(formData: FormData) {
  return this.http.post(this.API + '/registro', formData);
}


verplanes(){
  return this.http.get(this.API + '/planes')
}



//Visualizaciones para el cliente
verperfil(token: string):  Observable<any>{
  return this.http.get(this.API + '/perfil', { headers: { Authorization: token } });
}


verperfilpedidos(token: string):  Observable<any>{
  return this.http.get(this.API + '/perfil-pedidos', { headers: { Authorization: token } });
}


verperfiltrabajosrealizados(token: string):  Observable<any>{
  return this.http.get(this.API + '/trabajo-realizado', { headers: { Authorization: token } });
}

vercomentario(token: string):  Observable<any>{
  return this.http.get(this.API + '/comentario', {headers: { Authorization: token}})
}



//comentarios de los clientes
verdetalleobservacion(idpedido:number,token: string):  Observable<any>{
   return this.http.get(this.API + '/detalle-observacion/' +idpedido, {headers: { Authorization: token}})
}

//crear comentario del cliente
crearcomentario(comentario:Comentario){
  return this.http.post(this.API + '/observacion',comentario)
}


//ver las visitas que le hagan al cliente
verperfilvisitas(token: string):  Observable<any>{
  return this.http.get(this.API + '/visitas', { headers: { Authorization: token } });
}


//conteo de pedidos
verconteopedidos(token: string):  Observable<any>{
  return this.http.get(this.API + '/conteo-pedido', { headers: { Authorization: token } });
}

//conteo de trabajos realizados
verconteotrabajos(token: string):  Observable<any>{
  return this.http.get(this.API + '/conteo-completado', { headers: { Authorization: token } });
}



sumarpedidoscliente(token: string):  Observable<any>{
  return this.http.get(this.API + '/total-pedido', {headers: { Authorization: token}})
}


//recibos de clientes
recibosclientes(token: string):  Observable<any>{
  return this.http.get(this.API + '/recibo-cliente', {headers: { Authorization: token}})
}




//deseos de los clientes
creardeseo(favorito:any){
return this.http.post(this.API + '/favorito',favorito);
}


deseosclientes(token: string):  Observable<any>{
  return this.http.get(this.API + '/favoritos', {headers: { Authorization: token}})
}



//eliminar pedidos
eliminarpedido(idempresa: number){
  return this.http.delete(this.API + '/pedido/'+idempresa);
}


//recibos del cliente
crearecibo(recibo:any){
  return this.http.post(this.API + '/recibo',recibo);
  }


  verecibocliente(token: string):  Observable<any>{
    return this.http.get(this.API + '/recibo', {headers: { Authorization: token}})
  }


}
