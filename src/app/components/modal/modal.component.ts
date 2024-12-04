import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() mode: 'department' | 'employee' = 'department'; // Define mode como @Input
  @Output() close = new EventEmitter<void>();

  department = { codigo: 0, nombre: '' };
  employee = {
    codigo: 0,
    nombre: '',
    apellido1: '',
    apellido2: '',
    codigo_departamento: 0,
  };

  save() {
    if (this.mode === 'department') {
    } else if (this.mode === 'employee') {
    }
    this.close.emit();
  }
}
