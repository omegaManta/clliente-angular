import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReporteClienteService {
API: String = 'http://localhost:1000';
  constructor(private http: HttpClient) {}

verperiodo(ruc: String){
  return this.http.get(this.API + '/periodo_empresa/' +ruc);
}


//facturacion
ventafecha(p_periodo: string,p_desde: string,p_hasta: string,p_tipo: string,p_bodegas: string,p_cli_prov: string,p_vendedor: string){
  return this.http.get(this.API + '/venta-fecha/' +p_periodo + '/'+ p_desde + '/' +
  p_hasta+ '/' +
  p_tipo+ '/00' +
  p_bodegas+ '/00000' +
  p_cli_prov+ '/00' +
  p_vendedor);
}


cuentacobrar(p_periodo: string,p_tipocartera: string,p_tipo: string,p_tipod: string,p_vendedor: string,p_desde: string,
  p_hasta: string,p_saldo: string){
return this.http.get(this.API + '/cuenta-cobrar/00' +p_periodo+ '/'+p_tipocartera+'/'+p_tipo+ '/'+p_tipod+ '/'+p_vendedor+ '/'+
p_desde+ '/'+ p_hasta+ '/'+ p_saldo);
}



kardexproveedor(p_periodo: string,p_tipocar: string,p_categorias: string,p_tipo: string,
  p_desde: string, p_hasta: string){
  return this.http.get(this.API + '/kardex-proveedor/00' +p_periodo+ '/'+p_tipocar+'/'
  +p_categorias+'/'+p_tipo+'/'+p_desde+'/'+p_hasta);
}



kardexcliente(p_periodo: string,p_tipocar: string,p_cli_prov: string,p_tipo: string,
  p_desde: string, p_hasta: string){
  return this.http.get(this.API + '/kardex-cliente/00'+p_periodo+'/'+p_tipocar+'/'+p_cli_prov+'/'
  +p_tipo+'/'+p_desde+'/'+p_hasta);
}


//inventario
movimiento(p_periodo: string, p_desde: string, p_hasta: string,p_bodegas: string,p_categorias: string){
  return this.http.get(this.API + '/movimiento-inventario/00' +p_periodo+'/'
  +p_desde+'/'+p_hasta+'/'+p_bodegas+'/'+p_categorias);
}


kardexproducto(p_periodo: string, p_producto: string,
  p_desde: string, p_hasta: string, p_bodegas: string){
  return this.http.get(this.API + '/kardex-producto/00'+p_periodo+'/'
  +p_producto+'/'+p_desde+'/'+p_hasta+'/'+p_bodegas);
}


existenciaproducto(p_periodo: string, p_tipo: string, p_producto: string){
  return this.http.get(this.API + '/existencia-producto/00'+p_periodo+'/'+p_tipo+'/'
  +p_producto);
}


costoinventario(p_periodo: string, p_desde: string,p_hasta: string,
  p_categorias: string,p_bodegas: string,p_iva: string){
  return this.http.get(this.API + '/costo-inventario/00'+p_periodo+
  '/'+p_desde+'/'+p_hasta+'/'+p_categorias+'/'+p_bodegas+'/'+p_iva);
}



//recursos
clientes(){
  return this.http.get(this.API + '/cli');
}


documentos(){
  return this.http.get(this.API + '/documento');
}


vendedores(){
  return this.http.get(this.API + '/vendedor');
}

bodegas(){
  return this.http.get(this.API + '/bodega');
}


periodo(){
  return this.http.get(this.API + '/periodo_empresa');
}



}