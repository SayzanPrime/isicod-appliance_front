import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { TypeApplianceDto } from '../models/typeApplianceDto';
import { TypeApplianceService } from '../service/type-appliance.service';

@Component({
  selector: 'app-edit-type-appliance',
  templateUrl: './edit-type-appliance.component.html',
  styleUrls: ['./edit-type-appliance.component.scss']
})
export class EditTypeApplianceComponent implements OnInit {

  @Input() typeApplianceDtoIn;

  modalHeader: string;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private typeApplianceService: TypeApplianceService
  ) { }

  typeApplianceForm = this.fb.group({
    id: [],
    libelle: []
  })

  ngOnInit(): void {
    this.patchForm(this.typeApplianceDtoIn);
  }

  patchForm(typeApplianceDto: TypeApplianceDto){
    this.typeApplianceForm.patchValue({
      'id':  typeApplianceDto?.id,
      'libelle': typeApplianceDto?.libelle
    })
  }

  updateTypeAppliance(){
    this.typeApplianceService.updateTypeAppliance(this.typeApplianceForm.value).pipe(take(1)).subscribe(
      response => {
        this.addSuccess()
      },
      error => {
        this.ErrorSwal()
      }
    )
    this.activeModal.close();
  }

  addSuccess(){
    Swal.fire(
      'Updated!',
      'Appliance has been updated!',
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
