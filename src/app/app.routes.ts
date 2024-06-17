import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';


export const routes: Routes = [

    { path: 'employees', component: EmployeeListComponent },
    { path: 'employee-detail/:employeeId', component: EmployeeDetailComponent }, 
];
