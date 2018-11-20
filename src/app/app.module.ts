import { EmployeeOperationComponent } from './employee-operation/employee-operation.component';
import { EmployeeService } from './employee.service';
import { AppRoutingModule } from './app.routing-module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { FilterList } from './utils/filter-list.pipe';
@NgModule({
  declarations: [
    AppComponent,
    FilterList,
    EmployeeListComponent,
    EmployeeOperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService , FilterList],
  bootstrap: [AppComponent]
})
export class AppModule { }
