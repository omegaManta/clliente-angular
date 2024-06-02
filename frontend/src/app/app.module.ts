import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { HomeComponent } from './componentes/home/home.component';
import { ActualInfoComponent } from './componentes/empresa/actual-info/actual-info.component';
import { ConsultaCedulaComponent } from './componentes/empresa/consulta-cedula/consulta-cedula.component';
import { RegistroComponent } from './componentes/cuenta/registro/registro.component';
import { ConsultaRucComponent } from './componentes/empresa/consulta-ruc/consulta-ruc.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PaypalComponent } from './componentes/pagos/paypal/paypal.component';
import { DetalleServicioComponent } from './componentes/detalle-servicio/detalle-servicio.component';
import { DetalleCategoriaComponent } from './componentes/detalle-categoria/detalle-categoria.component';
import { PerfilClienteComponent } from './componentes/cliente/perfil-cliente/perfil-cliente.component';
import { PedidosClienteComponent } from './componentes/cliente/pedidos-cliente/pedidos-cliente.component';
import { ServiciosRealizadosClienteComponent } from './componentes/cliente/servicios-realizados-cliente/servicios-realizados-cliente.component';
import { ComentarioClienteComponent } from './componentes/cliente/comentario-cliente/comentario-cliente.component';
import { VisitasClienteComponent } from './componentes/cliente/visitas-cliente/visitas-cliente.component';
import { ReporteClienteComponent } from './componentes/reporte-cliente/reporte-cliente.component';
import { ReporteClienteCobrarComponent } from './componentes/reporte-cliente-cobrar/reporte-cliente-cobrar.component';
import { ReporteClienteKardexProveedorComponent } from './componentes/reporte-cliente-kardex-proveedor/reporte-cliente-kardex-proveedor.component';
import { ReporteClienteKardexClienteComponent } from './componentes/reporte-cliente-kardex-cliente/reporte-cliente-kardex-cliente.component';
import { ReporteClienteMovimientoComponent } from './componentes/reporte-cliente-movimiento/reporte-cliente-movimiento.component';
import { ReporteClienteKardexProductoComponent } from './componentes/reporte-cliente-kardex-producto/reporte-cliente-kardex-producto.component';
import { ReporteClienteExistenciaComponent } from './componentes/reporte-cliente-existencia/reporte-cliente-existencia.component';
import { ReporteClienteCostoInventarioComponent } from './componentes/reporte-cliente-costo-inventario/reporte-cliente-costo-inventario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FiltroOrdenPipe } from './componentes/pipes/filto-orden.pipe';
import { FavoritosComponent } from './componentes/cliente/favoritos/favoritos.component';




@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    NavegacionComponent,
    HomeComponent,
    ActualInfoComponent,
    ConsultaCedulaComponent,
    RegistroComponent,
    ConsultaRucComponent,
    PaypalComponent,
    DetalleServicioComponent,
    DetalleCategoriaComponent,
    PerfilClienteComponent,
    PedidosClienteComponent,
    ServiciosRealizadosClienteComponent,
    ComentarioClienteComponent,
    VisitasClienteComponent,
    ReporteClienteComponent,
    ReporteClienteCobrarComponent,
    ReporteClienteKardexProveedorComponent,
    ReporteClienteKardexClienteComponent,
    ReporteClienteMovimientoComponent,
    ReporteClienteKardexProductoComponent,
    ReporteClienteExistenciaComponent,
    ReporteClienteCostoInventarioComponent,
    FiltroOrdenPipe,
    FavoritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
