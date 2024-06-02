import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NotificacionService } from 'src/app/servicios/notificacion.service';
import { ServicioEmpresaService } from 'src/app/servicios/servicio-empresa.service';
import { ServicioUsuarioService } from 'src/app/servicios/servicio-usuario.service';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
declare var paypal;

@Component({
  selector: 'app-pedidos-cliente',
  templateUrl: './pedidos-cliente.component.html',
  styleUrls: ['./pedidos-cliente.component.css']
})
export class PedidosClienteComponent implements OnInit {
  @ViewChild('paypal',{static: true}) paypalElement : ElementRef;
  totalAPagar: number = 0;
  idempre: number = 0;
perfil: any = [];
p: number = 1;
titulo: any;
categorias: any;
pedidos: any = [];
totales: any = [];
completados: any = [];
compra: any = [];
today = new Date();
recibo: any = [];

  constructor(private serviciocliente: ServicioUsuarioService, 
    private serviciopedido: ServicioEmpresaService,
    private serviciocompra: NotificacionService,
    private router: Router
    ){}
  ngOnInit(): void {
    this.vercategorias();
    const token = localStorage.getItem('tokens-omega');
    if (token) {
      this.serviciocliente.verperfilpedidos(token).subscribe(
        res => {
          this.perfil = res.profile;
          //0onsole.log(token);
          //console.log('Perfil del cliente', this.perfil);
        },
        error => {
          console.error('Error al obtener el perfil del usuario', error);
        }
      );
      this.serviciocliente.verperfil(token).subscribe(
        res => {
          this.titulo = res.profile;
          console.log(token);
          console.log('Perfil del cliente', this.perfil);
        },
        error => {
          console.error('Error al obtener el perfil del usuario', error);
        }
      );
      this.serviciocliente.verconteopedidos(token).subscribe(
        res=>{
          this.pedidos = res.profile;
        }
      )
      this.serviciocliente.sumarpedidoscliente(token).subscribe(
        res => {
            this.totales = res.profile;
            if (this.totales.length > 0) {
              this.totalAPagar = this.totales[0].valor; // Almacena el valor en totalAPagar
            }
        }
      )
      this.serviciocliente.verconteotrabajos(token).subscribe(
        res=>{
          this.completados = res.profile;
        }
      );
      this.serviciocliente.verecibocliente(token).subscribe(
        res => {
            this.recibo = res.profile;
        }
      )
      paypal.Buttons(
        {
          style: {
            size: 'small', 
            color: 'gold', 
          },
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.titulo.nombre_empresa,
                  amount: {
                    currency_code: 'USD',
                    value: this.totalAPagar
                  }
                }
              ]
            })
          },
          onApprove: async(data,actions)=>{
            const order = await actions.order.capture();
            console.log(order);
            this.generarpdf(this.titulo.idempresa);
            this.eliminarpedidoempresa(this.titulo.idempresa);
            //this.enviarcompra(this.titulo.nombre_empresa,this.titulo.ruc,this.totalAPagar);
            this.router.navigate(['/servicio-realizado-cliente']);
            this.infor();
          },
          onError: err =>{
            console.log(err)
          }
        }).
      render(this.paypalElement.nativeElement);
    }
}


eliminarpedido(idpedido: number){
this.serviciopedido.eliminarpedido(idpedido).subscribe(
  res=>{
       window.location.reload();
       this.success();
  }
)
}



ir2(){
  this.router.navigate(['/servicio-realizado-cliente'])
}

success(){
  Swal.fire({
    position: 'top-end',
    width: 400,
    icon: 'warning',
    title: 'Pedido eliminado',
    showConfirmButton: false,
    timer: 1500
  })
}


vercategorias(){
  this.serviciopedido.vercategorias().subscribe(
    res =>{
    this.categorias = res;
    }
  )
}



enviarcompra(nombre_empresa:string,ruc:string,total:number){
const enviar = this.compra = {
  nombre_empresa: nombre_empresa,
  ruc: ruc,
  total: total
};
this.serviciocompra.notificacionpedido(enviar).subscribe(
  res => {
        this.correo();
  }
);
}


generarpdf(idempresa:number){
  const content = document.getElementById('content');
  const doc = new jsPDF('p', 'mm', [1000,1000]);
  
  doc.html(content, {
    callback: (doc) => {
      const pdfURL = doc.output('datauristring');
      const iframe = document.createElement('iframe');
      iframe.src = pdfURL;
      iframe.style.display = 'block';
      document.body.appendChild(iframe);

      const downloadLink = document.createElement('a');
      downloadLink.href = pdfURL;

      // 3. Enviar la URL del PDF a un servicio web:

      const enviar = {
        idempresa: idempresa,
        recibo: pdfURL,
      };

      this.serviciocliente.crearecibo(enviar).subscribe(
        res => {
          this.infor();
        }
      );
    }
  });
}


eliminarpedidoempresa(idempresa:number){
this.serviciocliente.eliminarpedido(idempresa).subscribe(
  res => {

  }
)
}


infor(){
  Swal.fire({
    position: 'top-end',
    width: 400,
    icon: 'success',
    title: 'Su compra mediante PayPal fue un exito, por favor descargue su recibo y presentelo en su tienda',
    showConfirmButton: true
  })
}

correo(){
  Swal.fire({
    position: 'top-end',
    width: 400,
    icon: 'info',
    title: 'Se notifico a la tienda de su pago y la generacion de su recibo',
    showConfirmButton: false
  })
}


}
