import { Component, OnInit } from '@angular/core';
import { DropdownOptionComponent } from '../../components/dropdown-option/dropdown-option.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Categoria {
  id: number;
  nombre: string;
}

interface Request {
  page: number;
  busqueda?: string;
  categoria?: number;
}

interface Contenido {
  imagen: string;
  titulo: string;
  autor: string;
  genero: string;
  categoria: string;
  unidadesDisponibles: number;
  prestable: boolean;
  id: number;
}

@Component({
  selector: 'app-index-contenido',
  standalone: true,
  imports: [DropdownOptionComponent, PaginatorComponent, NgFor, CommonModule, FormsModule],
  templateUrl: './index-contenido.component.html',
  styleUrl: './index-contenido.component.css'
})
export class IndexContenidoComponent implements OnInit {
  public constructor(private apiService: ApiService, private router: Router) { }

  public ngOnInit(): void {
    this.loadData(true);
    this.getCategorias();
  }


  dropdownOptions = [
    'Opción 1',
    'Opción 2',
    'Opción 3',
  ];

  contenidos: Contenido[] = [];
  categorias: Categoria[] = [];
  categoria: Categoria = { id: 0, nombre: '' };
  busqueda = '';
  paginacion = 10;
  totalElementos = 0;
  pagina = 1;
  totalPaginas = 0;

  loadData(setPagina: boolean): void {
    let request: Request = { page: this.pagina - 1 };

    if (this.busqueda) {
      request.busqueda = this.busqueda;
    }

    if (this.categoria.id) {
      request.categoria = this.categoria.id;
    }

    this.apiService.getData('contenidos/index', request)
      .then((response) => {
        this.cargarDatos(response, setPagina);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  private cargarDatos(response: any, setPagina: boolean): void {
    this.contenidos = response.content;
    this.totalElementos = response.totalElements;
    this.totalPaginas = response.totalPages;

    if (setPagina) {
      this.pagina = response.number + 1;
    }
  }

  private getCategorias(): void {
    this.apiService.getData('categorias/all')
      .then((response) => {
        this.categorias = response;
      })
      .catch((error) => {
        console.error(error);
      })
  }

  onBuscar(value: any): void {
    if (value.length >= 3 || value.length === 0) {
      this.busqueda = value;
      this.loadData(true);
    }
  }

  onCategoriaChange(categoria: Categoria): void {
    this.categoria = categoria;
    this.loadData(true);
  }
}
