import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { EditTypeApplianceComponent } from './edit-type-appliance/edit-type-appliance.component';
import { TypeApplianceDto } from './models/typeApplianceDto';
import { NewTypeApplianceComponent } from './new-type-appliance/new-type-appliance.component';
import { TypeApplianceService } from './service/type-appliance.service';

@Component({
  selector: 'app-type-appliance',
  templateUrl: './type-appliance.component.html',
  styleUrls: ['./type-appliance.component.scss']
})
export class TypeApplianceComponent implements OnInit {

  typeAppliances: TypeApplianceDto[];

  constructor(
    private modalService: NgbModal,
    private typeApplianceService: TypeApplianceService
    
  ) { }

  ngOnInit(): void {
    this.findAllTypeAppliances();
  }

  findAllTypeAppliances() {

    this.typeApplianceService.findAllTypeAppliances().pipe(take(1)).subscribe(data => {

      this.typeAppliances = data;
    },
      error => {
        // console.log(error);
      }
    );
  }

  newTypeAppliance(){
    const modalRef = this.modalService.open(NewTypeApplianceComponent, {size: 'l', centered: true})
    modalRef.result.then((result) => {
      this.findAllTypeAppliances();
    }).catch((res) => 
      console.log(res)
    );
  }

  updateTypeAppliance(row){
    const modalRef = this.modalService.open(EditTypeApplianceComponent, {size: 'l', centered: true})
    modalRef.componentInstance.typeApplianceDtoIn = row;
    modalRef.result.then((result) => {
      this.findAllTypeAppliances();
    }).catch((res) => 
      console.log(res)
    );
  }

  deleteTypeAppliance(id){
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

        this.typeApplianceService.deleteTypeAppliance(id).pipe(take(1)).subscribe(response => {
          this.deletedSuccess()
          this.findAllTypeAppliances()
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
      'Type Appliance has been deleted!',
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
