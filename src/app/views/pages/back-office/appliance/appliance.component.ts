import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { EditApplianceComponent } from './edit-appliance/edit-appliance.component';
import { ApplianceDto } from './models/appliance';
import { NewApplianceComponent } from './new-appliance/new-appliance.component';
import { ApplianceService } from './service/appliance.service';

@Component({
  selector: 'app-appliance',
  templateUrl: './appliance.component.html',
  styleUrls: ['./appliance.component.scss']
})
export class ApplianceComponent implements OnInit {

  appliances: ApplianceDto[];

  constructor(
    private modalService: NgbModal,
    private applianceService: ApplianceService
    
  ) { }

  ngOnInit(): void {
    this.findAllAppliances();
  }

  findAllAppliances() {

    this.applianceService.findAllAppliances().pipe(take(1)).subscribe(data => {

      this.appliances = data;
    },
      error => {
        // console.log(error);
      }
    );
  }

  newAppliance(){
    const modalRef = this.modalService.open(NewApplianceComponent, {size: 'l', centered: true})
    modalRef.result.then((result) => {
      this.findAllAppliances();
    }).catch((res) => 
      console.log(res)
    );
  }

  updateAppliance(row){
    const modalRef = this.modalService.open(EditApplianceComponent, {size: 'l', centered: true})
    modalRef.componentInstance.applianceDtoIn = row;
    modalRef.result.then((result) => {
      this.findAllAppliances();
    }).catch((res) => 
      console.log(res)
    );
  }

  deleteAppliance(id){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.applianceService.deleteAppliance(id).pipe(take(1)).subscribe(response => {
          this.deletedSuccess()
          this.findAllAppliances()
        },
          error => {
            this.ErrorSwal()
          }
        );
      }
    })
  }

  deletedSuccess(){
    Swal.fire(
      'Deleted!',
      'Appliance has been deleted!',
      'success'
    )
  }

  ErrorSwal(){
    Swal.fire({
      icon: 'error',
      title: 'Error ...',
      text: 'Something went wrong',
    })
  }

}
