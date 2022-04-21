import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { TypeApplianceService } from '../../type-appliance/service/type-appliance.service';
import { TypeApplianceDto } from '../../type-appliance/models/typeApplianceDto';
import { ApplianceService } from '../service/appliance.service';

@Component({
  selector: 'app-new-appliance',
  templateUrl: './new-appliance.component.html',
  styleUrls: ['./new-appliance.component.scss']
})
export class NewApplianceComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private applianceService: ApplianceService,
    private typeApplianceService: TypeApplianceService
  ) { }

  typeAppliances: TypeApplianceDto[];

  applianceForm = this.fb.group({
    libelle: [],
    dbid: [],
    disponibilite: [],
    ref: [],
    typeApplianceDto: []
  })

  ngOnInit(): void {
    this.findAllTypeAppliance();
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

  saveAppliance(){
    this.applianceService.saveAppliance(this.applianceForm.value).pipe(take(1)).subscribe(response => {
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
      'New Appliance Saved!',
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
