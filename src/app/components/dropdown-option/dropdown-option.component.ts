import { Component, Input } from '@angular/core';

@Component({
  selector: 'dropdown-option',
  standalone: true,
  imports: [],
  templateUrl: './dropdown-option.component.html',
  styleUrl: './dropdown-option.component.css'
})
export class DropdownOptionComponent {
  @Input() opcion: string | undefined;
}
