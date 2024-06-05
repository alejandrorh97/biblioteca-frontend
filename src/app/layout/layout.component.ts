import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SidebarItemComponent } from '../components/sidebar-item/sidebar-item.component';
import { faChartPie, faChartSimple, faGear, faHandHolding, faHandshake, faPhotoFilm, faUserGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, SidebarItemComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class MainLayout {
  sidebarItems = [
    { icono: faChartSimple, texto: 'Dashboard', ruta: '/' },
    { icono: faUserGroup, texto: 'Usuarios', ruta: '/usuarios' },
    { icono: faPhotoFilm, texto: 'Contenido', ruta: '/contenidos' },
    { icono: faHandHolding, texto: 'Prestamos', ruta: '/prestamos' },
    { icono: faHandshake, texto: 'Mis prestamos', ruta: '/' },
    { icono: faChartPie, texto: 'Reportes', ruta: '/' },
  ];
}
