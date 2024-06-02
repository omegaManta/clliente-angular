import { Component, OnInit } from '@angular/core';
import { ReporteClienteService } from 'src/app/servicios/reporte-cliente.service';
import { ServicioUsuarioService } from 'src/app/servicios/servicio-usuario.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';






@Component({
  selector: 'app-reporte-cliente-cobrar',
  templateUrl: './reporte-cliente-cobrar.component.html',
  styleUrls: ['./reporte-cliente-cobrar.component.css']
})
export class ReporteClienteCobrarComponent implements OnInit{
p_periodo: string;
p_tipocartera: string;
p_tipo: string;
p_tipod: string;
p_vendedor: string;
p_desde: Date;
p_hasta: Date;
p_saldo: string;
cuentas: any = [];
perfil: any;


constructor(private servicioreporte: ReporteClienteService,private serviciocliente: ServicioUsuarioService){}
ngOnInit(): void {
  const token = localStorage.getItem('tokens-omega');
  if(token){
    this.serviciocliente.verperfil(token).subscribe(
      res => {
        this.perfil = res.profile;
      }
    )
  }
}




downloadPDF() {
  // Extraemos el
  const DATA = document.getElementById('htmlData');
  const doc = new jsPDF('p', 'pt', 'a4');
  const options = {
    background: 'white',
    scale: 3
  };
  html2canvas(DATA, options).then((canvas) => {

    const img = canvas.toDataURL('image/PNG');

    // Add image Canvas to PDF
    const bufferX = 15;
    const bufferY = 15;
    const imgProps = (doc as any).getImageProperties(img);
    const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
    return doc;
  }).then((docResult) => {
    const fileName = 'informe.pdf';
    doc.output('dataurlnewwindow',{filename: fileName});
   //doc.save('informe.pdf');
  });
}



buscarcuentas(){
  const desde = this.p_desde.toString();
  const hasta = this.p_hasta.toString();
this.servicioreporte.cuentacobrar(this.p_periodo,this.p_tipocartera,
  this.p_tipo,this.p_tipod,this.p_vendedor,desde,hasta,
  this.p_saldo).subscribe(
    res => {
      this.cuentas = res;
    }
  )
}



}
