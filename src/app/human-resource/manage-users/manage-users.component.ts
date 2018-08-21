import { Component, OnInit } from '@angular/core';
import { HumanResourceService } from '../hr-services/human-resource.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../hr-services/employee.model';
import { FormsModule }   from '@angular/forms';

declare var M: any; 


@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  
  flag = false;

  constructor(private employeeService: HumanResourceService) { }

  ngOnInit() {
    // this.resetForm();
    this.refreshEmployeeList();
  }

  resetForm(form?: NgForm){
    if (form)
      form.reset();
    this.employeeService.selectedEmployee = {
      _id: "",
      name: "",
      address: "",
      contactno: ""
    }
  }

  onSubmit(form: NgForm){
    if(form.value._id == ""){
    this.employeeService.postEmployee(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshEmployeeList();
      // M.toast({html: 'Saved successfully', classes: 'rounded'});
    });
    }
    else{
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();
        // M.toast({html: 'Updated successfully', classes: 'rounded'});
      });
    }
  }

  refreshEmployeeList(){
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employee[];
      console.log(res);
    });
  }

  onEdit(emp: Employee){
    this.employeeService.selectedEmployee = emp;
    this.flag = true;
  }

  onDelete(_id: string){
    if (confirm('Are you sure to delete this record?') == true){
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.refreshEmployeeList();
        // this.resetForm(form);
        // M.toast({ html: 'Deleted Successfully', classes: 'rounded' })
      });
    }
  }


}
