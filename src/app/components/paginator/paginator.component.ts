import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'paginator',
  standalone: true,
  imports: [NgClass],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {
  desde = 1;
  @Input() paginacion = 15;
  @Input() totalElementos = 90;
  @Input() pagina = 1;
  @Input() totalPaginas = 10;
  @Output() cambioPagina = new EventEmitter<number>();

  currentPageStyle = 'flex items-center justify-center px-3 h-8 text-sky-600 border border-gray-300 bg-sky-50 hover:bg-sky-100 hover:text-sky-700';
  pageStyle = 'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700';

  getDesdeHasta() {
    const desde = (this.pagina - 1) * this.paginacion + 1;
    const hasta = Math.min(this.pagina * this.paginacion, this.totalElementos);
    return `${desde} - ${hasta}`;
  }

  siguiente() {
    if (this.pagina < this.totalPaginas) {
      this.cambioPagina.emit(this.pagina + 1);
    }
  }

  anterior() {
    if (this.pagina > 1) {
      this.cambioPagina.emit(this.pagina - 1);
    }
  }

  irAPagina(pagina: number) {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.cambioPagina.emit(pagina);
    }
  }

  getPaginas() {
    const paginationNumbers = [];
    let startPage, endPage;

    if (this.totalPaginas <= 5) {
      // Si el total de páginas es menor o igual a 5, mostramos todas las páginas
      startPage = 1;
      endPage = this.totalPaginas;
    } else {
      if (this.pagina <= 3) {
        // Si la página actual es menor o igual a 3, mostramos las primeras 5 páginas
        startPage = 1;
        endPage = 5;
      } else if (this.pagina + 2 >= this.totalPaginas) {
        // Si la página actual está cerca del final, mostramos las últimas 5 páginas
        startPage = this.totalPaginas - 4;
        endPage = this.totalPaginas;
      } else {
        // Mantener la página actual centrada
        startPage = this.pagina - 2;
        endPage = this.pagina + 2;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      paginationNumbers.push(i);
    }

    return paginationNumbers;
  }
}
