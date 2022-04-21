import { Component, OnInit } from '@angular/core';
import { StudentService } from './service/student.service';
import { take } from 'rxjs/operators';
import { IStudentModel } from './model/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  
  students: IStudentModel[];

  constructor( private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(){
    this.studentService.getStudents().pipe(take(1)).subscribe(data => {
      this.students = data;      
    },
      error => {
        console.log(error);
        
      }
    );
  }

  studentDetail(user_id){

  }

}
