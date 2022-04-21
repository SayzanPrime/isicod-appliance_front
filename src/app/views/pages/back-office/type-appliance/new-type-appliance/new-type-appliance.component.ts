import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { TypeApplianceService } from '../service/type-appliance.service';

@Component({
  selector: 'app-new-type-appliance',
  templateUrl: './new-type-appliance.component.html',
  styleUrls: ['./new-type-appliance.component.scss']
})
export class NewTypeApplianceComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private typeApplianceService: TypeApplianceService
  ) { }

  typeApplianceForm = this.fb.group({
    libelle: []
  })

  ngOnInit(): void {

  }

  saveTypeAppliance(){
    this.typeApplianceService.saveTypeAppliance(this.typeApplianceForm.value).pipe(take(1)).subscribe(response => {
        this.addSuccess()
    }),
    error => {
      this.ErrorSwal()
    }
    this.activeModal.close();
  }

  addSuccess(){
    Swal.fire(
      'Added!',
      'New Type Appliance Saved!',
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

  closeModal(){
    this.activeModal.close();
  }

}
