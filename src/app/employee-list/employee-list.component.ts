import { FilterList } from './../utils/filter-list.pipe';
import { EmployeeService } from './../employee.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
    employeeList: any[];
    searchText: String;
    constructor(private _empService: EmployeeService, private filterList: FilterList, private router: Router) {

    }
    ngOnInit(): void {
        console.log('ngOnInit');
        this.employeeList = this.filterList.transform(this._empService.getEmployeeList(), this.searchText);
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy');
    }

    filterData() {
        this.employeeList = this.filterList.transform(this._empService.getEmployeeList(), this.searchText);
    }

    addEmployee() {
        this.router.navigateByUrl('/addEmployee');
    }
}
