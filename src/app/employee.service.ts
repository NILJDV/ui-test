import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class EmployeeService {
    constructor() {}

    data = [{
        'id': 1,
        'name': 'Jhon',
        'phone': '9999999999',
        'address':
        {
        'city': 'Pune',
        'address_line1': 'ABC road',
        'address_line2': 'XYZ building',
        'postal_code': '12455'
        }
        }, {
        'id': 2,
        'name': 'Jacob',
        'phone': 'AZ99A99PQ9',
        'address':
        {
        'city': 'Pune',
        'address_line1': 'PQR road',
        'address_line2': 'ABC building',
        'postal_code': '13455'
        }
        }, {
        'id': 3,
        'name': 'Ari',
        'phone': '145458522',
        'address':
        {
        'city': 'Mumbai',
        'address_line1': 'ABC road',
        'address_line2': 'XYZ building',
        'postal_code': '12455'
        }
        }];

    getEmployeeList() {
        return this.data;
    }

    getEmployee(empId) {
        return this.data.find(d => {
            return Number(d.id) === Number(empId);
        });
    }

    addDataToEmployeeList(dataObj) {
        const obj = {
            'id': dataObj.empID,
            'name': dataObj.empName,
            'phone': dataObj.phoneNo,
            'address': {
                'city': dataObj.street,
                'address_line1': dataObj.addressLine1,
                'address_line2': dataObj.addressLine2,
                'postal_code': dataObj.postalCode
                }
            };
        this.data.push(obj);
    }

    updateEmployeeList(dataObj) {
        this.data.forEach( d => {
            if (d.id === dataObj.empID) {
                d.name = dataObj.empName;
                d.phone = dataObj.phoneNo;
                d.address.address_line1 = dataObj.addressLine1;
                d.address.address_line2 = dataObj.addressLine2;
                d.address.city = dataObj.street;
                d.address.postal_code = dataObj.postalCode;
            }
        });
    }
}
