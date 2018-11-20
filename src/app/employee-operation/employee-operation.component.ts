import { EmployeeService } from './../employee.service';
import { Component, OnInit, OnDestroy , Inject, trigger, transition, style, animate } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormControl } from '@angular/forms';
@Component({
    selector: 'app-employee-operation',
    templateUrl: './employee-operation.component.html',
    styleUrls: ['./employee-operation.component.scss'],
    animations: [
        trigger('showAnimation', [
            transition(':enter', [
                style({ transform: 'translateX(-100%)', opacity: 1 }),
                animate(
                    '500ms',
                    style({ transform: 'translateX(0)', opacity: 1 })
                )
            ])
            ,
            transition(':leave', [
                style({ transform: 'translateX(0)', opacity: 1 }),
                animate(
                    '500ms',
                    style({ transform: 'translateX(-100%)', opacity: 1 })
                )
            ])
        ])
    ]
})
export class EmployeeOperationComponent implements OnInit, OnDestroy {
    employeeOperationType = 'Add Employee';
    employeeOperationForm: FormGroup;
    submitted = false;
    employeeObj;

    constructor(private _empService: EmployeeService , private router: Router , private activatedRoute: ActivatedRoute) {

    }
    ngOnInit(): void {
        console.log('ngOnInit employee Operation');
        this.createForm();
        if (this.router.url.startsWith('/editEmployee')) {
            this.employeeOperationType = 'Edit Employee';
            const empID = this.router.url.substring((this.router.url.lastIndexOf('/') + 1), this.router.url.length);
            this.employeeObj = this._empService.getEmployee(empID);
            this.patchValue();
        } else {
        }
    }

    createForm() {
        this.employeeOperationForm = new FormGroup({
            empID: new FormControl(Math.floor((Math.random() * 1000) + 1), []),
            empName: new FormControl(null, [Validators.required, Validators.minLength(4)]),
            phoneNo: new FormControl(null, [Validators.required, Validators.pattern(/^\d{10}$/)]),
            addressLine1: new FormControl(null),
            addressLine2: new FormControl(null),
            postalCode: new FormControl(null),
            street: new FormControl(null)
        });
    }

    patchValue() {
        this.employeeOperationForm.patchValue({
            empID: this.employeeObj.id,
            empName: this.employeeObj.name,
            phoneNo: this.employeeObj.phone,
            addressLine1: this.employeeObj.address.address_line1,
            addressLine2: this.employeeObj.address.address_line2,
            postalCode: this.employeeObj.address.postal_code,
            street: this.employeeObj.address.city
        });
    }


    ngOnDestroy(): void {
        console.log('ngOnDestroy');
    }

    performOpertaion() {
        this.submitted = true;
        if (this.employeeOperationForm.valid) {
            if (this.router.url.startsWith('/editEmployee')) {
                this._empService.updateEmployeeList(this.employeeOperationForm.value);
            } else {
                this._empService.addDataToEmployeeList(this.employeeOperationForm.value);
            }
            this.router.navigateByUrl('/');
        }
    }
}
