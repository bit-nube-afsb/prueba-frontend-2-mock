import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DepartmentComponent } from '../../components/department/department.component';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule, DepartmentComponent, ModalComponent], 
  templateUrl: './list.component.html',
})
export class ListComponent {
  view: 'departments' | 'employees' = 'departments';
  modalIsOpen = false;
  modalMode: 'department' | 'employee' = 'department';

  employees = [
    { id: 1, name: 'John Doe', position: 'Manager' },
    { id: 2, name: 'Jane Smith', position: 'Developer' },
    { id: 3, name: 'Alice Johnson', position: 'Designer' },
  ];

  openModal(mode: 'department' | 'employee') {
    this.modalMode = mode;
    this.modalIsOpen = true;
  }

  closeModal() {
    this.modalIsOpen = false;
  }
}
