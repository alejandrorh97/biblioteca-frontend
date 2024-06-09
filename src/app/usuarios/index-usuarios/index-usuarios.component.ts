import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DropdownOptionComponent } from '../../components/dropdown-option/dropdown-option.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { ApiService } from '../../services/api.service';
import { NgFor, CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  rol: string;
  eliminado: boolean;
}

interface Rol {
  id: number;
  nombre: string;
}

interface Request {
  page: number;
  busqueda?: string;
  rol?: number;
}

@Component({
  selector: 'app-index-usuarios',
  standalone: true,
  imports: [RouterLink, DropdownOptionComponent, PaginatorComponent, NgFor, CommonModule, FormsModule],
  templateUrl: './index-usuarios.component.html',
  styleUrl: './index-usuarios.component.css'
})
export class IndexUsuariosComponent implements OnInit {
  roles: Rol[] = [];
  usuarios: Usuario[] = [];
  paginacion = 10;
  totalElementos = 0;
  pagina = 1;
  totalPaginas = 0;
  busqueda = '';
  rol: Rol = { id: 0, nombre: '' };


  public constructor(private apiService: ApiService, private router: Router) { }

  public ngOnInit(): void {
    this.loadData(true);
    this.getRoles();
  }

  loadData(setPagina: boolean): void {
    let request: Request = { page: this.pagina - 1 };

    if (this.busqueda) {
      request.busqueda = this.busqueda;
    }

    if (this.rol.id > 0) {
      request.rol = this.rol.id;
    }

    this.apiService.getData('usuarios/index', request)
      .then((response) => {
        this.cargarDatos(response, setPagina);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  private getRoles(): void {
    this.apiService.getData('roles/all')
      .then((response) => {
        this.roles = response;
      })
      .catch((error) => {
        console.error(error);
      })
  }

  eliminar(id: number): void {
    this.apiService.deleteData('usuarios/delete/' + id)
      .then((response) => {
        console.log('Usuario eliminado:', response);
        this.loadData(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  ver(id: number): void {
    console.log('Ver usuario con id:', id);
  }

  editar(id: number): void {
    console.log('Editar usuario con id:', id);
  }

  cambioPagina(pagina: number): void {
    console.log('Cambio de página:', pagina - 1);
    this.pagina = pagina;
    this.loadData(false);
  }

  onBuscar(value: any): void {
    if (value.length > 3 || value.length === 0){
      this.busqueda = value;
      this.loadData(true);
    }
  }

  onRolChange(rol: Rol): void {
    this.rol = rol;
    this.loadData(true);
  }

  cargarDatos(response: any, setPagina: boolean): void {
    this.usuarios = response.content;
    this.paginacion = response.size;
    this.totalElementos = response.totalElements;
    this.totalPaginas = response.totalPages;
    if (setPagina) {
      this.pagina = response.number + 1;
    }
  }

  crearUsuario(): void {
    this.router.navigate(['/usuarios/crear']);
  }
}
