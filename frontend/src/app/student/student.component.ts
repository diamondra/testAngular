import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { StudentService} from "./student.service";
import { Student} from "./student.model";
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {StudentDetailComponent} from "../student-detail/student-detail.component";
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements AfterViewInit   {
    students: Student[];
    error = '';
    success = '';
    dataSource: any ;
    displayedColumns: string[] = ['title','last_name','first_name','email'];
    resultsLength = 0;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private service: StudentService, private dialog: MatDialog) {}

    ngAfterViewInit() {
        this.getStudents();
    }

    getStudents(): void {
        this.service.getAll().subscribe(
            (res: Student[]) => {
                this.students = res;
                this.dataSource = new TableVirtualScrollDataSource(this.students);
                this.dataSource.paginator = this.paginator;
            }
        );
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    openDialog(id: any) {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = this.students[id];
        this.dialog.open(StudentDetailComponent, dialogConfig);
    }
}
