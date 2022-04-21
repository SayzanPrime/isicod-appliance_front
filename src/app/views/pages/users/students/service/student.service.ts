import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  readonly APIUrl = environment.APIUrl + 'student/';
  constructor(private http: HttpClient) { }

  getStudents():Observable<any>{
    return this.http.get<any>(this.APIUrl + 'get_students');
  }  
}
