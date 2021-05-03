import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Student} from "../student/student.model";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
    student: Student;
    constructor( public dialogRef: MatDialogRef<StudentDetailComponent>, @Inject(MAT_DIALOG_DATA) data: any ) {
        this.student = data;
        console.log(data);
    }

    ngOnInit() {

    }
    close(): void {
        this.dialogRef.close();
    }
}
