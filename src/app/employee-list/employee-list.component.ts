import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../employee.service';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, EmployeeDetailComponent, AddEmployeeComponent, FormsModule, RouterModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit { 
  employees!: Employee[];
  selectedEmployee: Employee | null = null;

  constructor(private employeeService: EmployeeService) { }
  ngOnInit(){
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

  showDetails(employee: Employee) {
    this.selectedEmployee = employee;
  }

  addEmployeeToList(newEmployee: Employee) {
    this.employees.push(newEmployee);
  }

  editEmployee(employee: Employee) {
    this.selectedEmployee = { ...employee }; // Create a copy of the employee
  }

  updateEmployee(updatedEmployee: Employee) {
    const index = this.employees.findIndex(e => e.id === updatedEmployee.id);
    if (index > -1) {
      this.employees[index] = updatedEmployee;
    }
    this.selectedEmployee = null; // Clear the selected employee
  }


  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id);
    // After deleting, update the employee list
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
  }

}
