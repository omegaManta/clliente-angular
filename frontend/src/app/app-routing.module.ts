import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ConsultaCedulaComponent } from './componentes/empresa/consulta-cedula/consulta-cedula.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { sesion } from './guards/sesion';
import { ConsultaRucComponent } from './componentes/empresa/consulta-ruc/consulta-ruc.component';
import { RegistroComponent } from './componentes/cuenta/registro/registro.component';
import { PaypalComponent } from './componentes/pagos/paypal/paypal.component';
import { DetalleServicioComponent } from './componentes/detalle-servicio/detalle-servicio.component';
import { DetalleCategoriaComponent } from './componentes/detalle-categoria/detalle-categoria.component';
import { PerfilClienteComponent } from './componentes/cliente/perfil-cliente/perfil-cliente.component';
import { PedidosClienteComponent } from './componentes/cliente/pedidos-cliente/pedidos-cliente.component';
import { ServiciosRealizadosClienteComponent } from './componentes/cliente/servicios-realizados-cliente/servicios-realizados-cliente.component';
import { ComentarioClienteComponent } from './componentes/cliente/comentario-cliente/comentario-cliente.component';
import { VisitasClienteComponent } from './componentes/cliente/visitas-cliente/visitas-cliente.component';
import { ReporteClienteComponent } from './componentes/reporte-cliente/reporte-cliente.component';
import { FavoritosComponent } from './componentes/cliente/favoritos/favoritos.component';

const routes: Routes = [
  { path: '',
  component: UsuarioComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [sesion]
  },
  {
    path: 'consulta',
    component: ConsultaCedulaComponent,
    canActivate: [sesion]
  },
  {
    path: 'consulta-ruc',
    component: ConsultaRucComponent,
    canActivate: [sesion]
  },
  {
    path: 'login',
    component: UsuarioComponent
  },
  {
    path: 'cuenta',
    component: RegistroComponent
  },

  //pagos
  {
    path: 'paypal/:idplan',
    component: PaypalComponent
  },


  //detalle de servicios
  {
    path: 'servicio/:idservicio',
    component: DetalleServicioComponent,
    canActivate: [sesion]
  },


  //detalle de categorias
  {
    path: 'categoria/:idcategoria',
    component: DetalleCategoriaComponent,
    canActivate:[sesion]
  },


  //perfil del cliente
  {
    path: 'perfil-cliente',
    component: PerfilClienteComponent,
    canActivate: [sesion]
  },
  //pedidos del cliente
  {
    path: 'pedidos-cliente',
    component: PedidosClienteComponent
  },

  //lista de productos favoritos de los clientes
  {
    path: 'favoritos',
    component: FavoritosComponent
  },
  //servicios realizados del cliente
  {
    path: 'servicio-realizado-cliente',
    component: ServiciosRealizadosClienteComponent
  },
  //comentarios del cliente
  {
    path: 'comentario/:idpedido',
    component: ComentarioClienteComponent
  },


  //visitas de los tecnicos al cliente
  {
    path: 'visitas',
    component: VisitasClienteComponent
  },




  //periodos
  {
    path: 'pfs',
    component: ReporteClienteComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
