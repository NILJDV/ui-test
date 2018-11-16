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
                }
            ]
        ),
    ],
    providers: [],
    exports: [RouterModule]
})
export class AppRoutingModule {}
