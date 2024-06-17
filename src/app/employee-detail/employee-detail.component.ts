import { Component , OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Employee } from '../models/employee';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css'
})
export class EmployeeDetailComponent implements OnInit {
  
 @Input() employee!: Employee;
 @Output() employeeChange = new EventEmitter<Employee>(); 

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router // Inject Router
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const employeeIdFromRoute = Number(routeParams.get('employeeId'));

    this.employeeService.getEmployee(employeeIdFromRoute).subscribe(employee => {
      this.employee = employee;
    });
  }

  save() {
    this.employeeService.updateEmployee(this.employee).subscribe(() => {
      this.goBack();
    });
  }

  goBack(): void {
    this.router.navigate(['/employees']);
  }
}
