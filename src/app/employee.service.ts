import { Injectable } from '@angular/core';
import { Employee } from './models/employee';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:5055/api/employees';

  constructor(private http: HttpClient) { } // Inject HttpClient

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }

  addEmployee(employee: Employee): Observable<any> {
    return this.http.post<any>(this.apiUrl, employee);
  }
  
  updateEmployee(employee: Employee): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${employee.id}`, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
   
}
