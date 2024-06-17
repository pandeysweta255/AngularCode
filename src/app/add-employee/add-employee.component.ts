import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../models/employee';
import { EmployeeService } from '../employee.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  @Output() onAddEmployee = new EventEmitter<Employee>();

  newEmployee: Employee = { id: 0, name: '', salary: 0, department: '' };

  constructor(private employeeService: EmployeeService) { }

  onSubmit() {
    this.employeeService.addEmployee(this.newEmployee);
    this.newEmployee = { id: 0, name: '', salary: 0, department: '' }; // Reset the form
  }
}
