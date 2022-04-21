import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { TypeApplianceService } from '../../type-appliance/service/type-appliance.service';
import { ApplianceDto } from '../models/appliance';
import { TypeApplianceDto } from '../../type-appliance/models/typeApplianceDto';
import { ApplianceService } from '../service/appliance.service';

@Component({
  selector: 'app-edit-appliance',
  templateUrl: './edit-appliance.component.html',
  styleUrls: ['./edit-appliance.component.scss']
})
export class EditApplianceComponent implements OnInit {

  @Input() applianceDtoIn;

  modalHeader: string;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private applianceService: ApplianceService,
    private typeApplianceService: TypeApplianceService
  ) { }

  applianceForm = this.fb.group({
    id: [],
    libelle: [],
    dbid: [],
    disponibilite: [],
    ref: [],
    typeApplianceDto: []
  })

  typeAppliances: TypeApplianceDto[];

  ngOnInit(): void {

    this.findAllTypeAppliance();
    this.patchForm(this.applianceDtoIn);
    
  }

  findAllTypeAppliance(){
    this.typeApplianceService.findAllTypeAppliances().pipe(take(1)).subscribe(data => {
      this.typeAppliances = data;
    },
      error => {
        // console.log(error);
      }
    );
  }

  patchForm(applianceDto: ApplianceDto){
    this.applianceForm.patchValue({
      'id':  applianceDto?.id,
      'libelle': applianceDto?.libelle,
      'dbid': applianceDto?.dbid,
      'disponibilite': applianceDto?.disponibilite,
      'ref': applianceDto?.ref,
      'typeApplianceDto': applianceDto?.typeApplianceDto
    })
  }

  updateAppliance(){
    this.applianceService.updateAppliance(this.applianceForm.value).pipe(take(1)).subscribe(
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
