import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../services/department/department.service';
import { Department } from '../../models/department.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() mode: 'department' | 'employee' = 'department'; // Define mode como @Input
  @Output() close = new EventEmitter<void>();

  private departmentService = inject(DepartmentService);
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
      this.departmentService.createDepartment(this.department).subscribe({
        next: (response:any)=>{
          this.department = {codigo: response.departamento.codigo, nombre: response.departamento.nombre}
          window.location.reload();
        },
        error: (err:any) =>{
          console.error(err);
        }
      }
      )
    } else if (this.mode === 'employee') {
    }
    this.close.emit();
  }
}
