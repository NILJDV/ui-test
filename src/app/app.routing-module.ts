import { EmployeeOperationComponent } from './employee-operation/employee-operation.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    component: EmployeeListComponent,
                    pathMatch: 'full'
                },
                {
                    path: 'addEmployee',
                    component: EmployeeOperationComponent,
                },
                {
                    path: 'editEmployee/:param1',
                    component: EmployeeOperationComponent,
                }
            ]
        ),
    ],
    providers: [],
    exports: [RouterModule]
})
export class AppRoutingModule {}
