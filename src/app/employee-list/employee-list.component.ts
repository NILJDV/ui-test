import { EmployeeService } from './../employee.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
    employeeList: any[];
    constructor(private _empService: EmployeeService) {

    }
    ngOnInit(): void {
        console.log('ngOnInit');
        this.employeeList = this._empService.getEmployeeList();
        this.employeeList.forEach(item => {
            if (isNaN(item.phone)) {
               item.phone = 'NA';
            }
         });
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy');
    }
}
