import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'paginator',
  standalone: true,
  imports: [NgClass],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {
  @Input() from = 1;
  @Input() size = 15;
  @Input() total = 90;
  @Input() page = 1;

  currentPageStyle = 'flex items-center justify-center px-3 h-8 text-sky-600 border border-gray-300 bg-sky-50 hover:bg-sky-100 hover:text-sky-700';
  pageStyle = 'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700';

  getDesdeHasta() {
    return `${this.from} - ${this.from + this.size - 1}`;
  }

  getPaginas() {
    const pages = [];
    const maxPages = 5;
    const totalPages = Math.ceil(this.total / this.size);
    let start = this.page - 2;
    let end = this.page + 2;

    if (start < 1) {
      start = 1;
      end = maxPages;
    }

    if (end > totalPages) {
      start = totalPages - maxPages + 1;
      end = totalPages;
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }
}
