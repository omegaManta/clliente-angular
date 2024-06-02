import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroOrden'
})
export class FiltroOrdenPipe implements PipeTransform {
  transform(items: any[], searchText: string, columnaOrden: string, orden: string): any {
    if (!items) {
      return [];
    }

    // Filtrar por texto
    if (searchText) {
      items = items.filter(item => {
        // Aquí puedes personalizar la lógica de filtrado según tus necesidades
        // Por ejemplo, si quieres que coincida con el texto en cualquier parte de la cadena
        return Object.values(item).some(val =>
          val.toString().toLowerCase().includes(searchText.toLowerCase())
        );
      });
    }

    // Ordenar por columna
    if (columnaOrden && orden) {
      items = items.sort((a, b) => {
        const aValue = a[columnaOrden];
        const bValue = b[columnaOrden];

        if (aValue < bValue) {
          return orden === 'asc' ? -1 : 1;
        } else if (aValue > bValue) {
          return orden === 'asc' ? 1 : -1;
        } else {
          return 0;
        }
      });
    }

    return items;
  }
}