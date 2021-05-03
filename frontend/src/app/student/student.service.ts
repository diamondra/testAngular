import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Student} from "./student.model";
import {plainToClass} from "class-transformer";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
    students: Student[];
  constructor(private http: HttpClient) { }
    getAll(): Observable<Student[]> {
        return this.http.get('http://localhost:8000/api/getStudents.php').pipe(
            map((res) => {
               return plainToClass(Student, JSON.parse(res.toString()));
            })
        );
    }
}
