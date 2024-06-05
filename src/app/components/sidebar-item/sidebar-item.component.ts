import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'sidebar-item',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.css'
})
export class SidebarItemComponent {
  @Input() icono: IconProp = ['fas', 'home'];
  @Input() texto: string = '';
  @Input() ruta: string = '';
}
