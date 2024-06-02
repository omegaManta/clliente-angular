import {Component, OnInit, ViewChild} from '@angular/core';
import { ReporteClienteService } from 'src/app/servicios/reporte-cliente.service';
import { ServicioUsuarioService } from 'src/app/servicios/servicio-usuario.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-reporte-cliente',
  templateUrl: './reporte-cliente.component.html',
  styleUrls: ['./reporte-cliente.component.css']
})
export class ReporteClienteComponent implements OnInit{
  p_periodo: string;
  p_desde: Date;
  p_hasta: Date;
  p_tipo: string;
  p_bodegas: string;
  p_cli_prov: string;
  p_vendedor: string;
  ventas: any = [];
  periodos: any = [];
  perfil: any;
  p: number = 1;
  compradores: any = [];
  tipos: any = [];
  negociantes: any = [];
  bodega: any = [];
  columnaOrden: string = '';
  orden: 'asc' | 'desc' = 'asc';
  filtros: { [key: string]: string } = {};





  displayedColumns: string[] = ['tipo', 'documento', 'n_referencia', 'detalle_mov', 'fecha_emision', 'subtotal', 'descuento1', 'iva', 'total', 'vendedor', 'fecha_vence', 'tipo_venta', 'n_asiento'];
  dataSource: MatTableDataSource<any>;

  // Paginator y Sort
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  constructor(private servicioreporte: ReporteClienteService, private serviciocliente: ServicioUsuarioService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('tokens-omega');
    if (token) {
      this.serviciocliente.verperfil(token).subscribe(
        res => {
          this.perfil = res.profile;
        },
        error => {
          console.error('Error al obtener el perfil del usuario', error);
        }
      );
    }
    this.clientes();
    this.documentos();
    this.vendedores();
    this.bodegas();
    this.periodo();
   
    this.dataSource = new MatTableDataSource(this.ventas);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.buscarVentas();
  }


  // Agregar método para filtrar
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  buscarVentas() {
    const desde = this.p_desde.toString();
    const hasta = this.p_hasta.toString();

    this.servicioreporte.ventafecha(this.p_periodo, desde, hasta,
      this.p_tipo,
      this.p_bodegas,
      this.p_cli_prov,
      this.p_vendedor).
    subscribe(
      res => {
        this.ventas = res;
        this.dataSource.data = this.ventas;
      }
    );
  }




  downloadPDF() {
    const DATA = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };

    window.scrollTo(0, document.body.scrollHeight);

    setTimeout(() => {
      html2canvas(DATA, options).then((canvas) => {
        const imgData = canvas.toDataURL('image/PNG');
        const pdfWidth = doc.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        canvas.width = pdfWidth;
        canvas.height = pdfHeight;

        doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        doc.save('informe.pdf');
      });
    }, 1000);
  }

  clientes() {
    this.servicioreporte.clientes().subscribe(
      res => {
        this.compradores = res;
      }
    );
  }

  documentos() {
    this.servicioreporte.documentos().subscribe(
      res => {
        this.tipos = res;
      }
    );
  }

  vendedores() {
    this.servicioreporte.vendedores().subscribe(
      res => {
        this.negociantes = res;
      }
    );
  }

  bodegas() {
    this.servicioreporte.bodegas().
    subscribe(
      res => {
        this.bodega = res;
      }
    );
  }

  periodo() {
    this.servicioreporte.periodo().subscribe(
      res => {
        this.periodos = res;
      }
    );
  }

  calcularSuma(columna: string): number {
    let suma = 0;
    for (let v of this.ventas) {
      suma += v[columna];
    }
    return suma;
  }

  obtenerNombreVendedor(vendedorId: number): string {
    const vendedor = this.negociantes.find(v => v.vendedor === vendedorId);
    return vendedor ? vendedor.nombre : '';
  }

  seleccionarTodosDocumentos() {
    this.p_tipo = this.tipos.map(t => t.cod_tipo);
  }

  seleccionarTodasbodegas() {
    this.p_bodegas = this.bodega.map(t => t.codigo);
  }

  seleccionarTodosclientes() {
    this.p_cli_prov = this.compradores.map(t => t.codigo);
  }

  seleccionarTodosvendedores() {
    this.p_vendedor = this.negociantes.map(t => t.codigo);
  }



//encabezados
 // Método para ordenar por columna
 

// Método para cambiar el orden de la columna
ordenarPor(columna: string) {
  if (this.columnaOrden === columna) {
    this.orden = this.orden === 'asc' ? 'desc' : 'asc';
  } else {
    this.columnaOrden = columna;
    this.orden = 'asc';
  }

  // Volver a llamar a buscarVentas para aplicar el nuevo orden
  this.buscarVentas();
}



}