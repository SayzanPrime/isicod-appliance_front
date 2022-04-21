import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeApplianceDto } from '../models/typeApplianceDto';

@Injectable({
  providedIn: 'root'
})
export class TypeApplianceService {

  readonly APIUrl = environment.APIUrl + 'typeAppliance/';

  constructor(private http: HttpClient) { }

  findAllTypeAppliances() : Observable<any> {
    return this.http.get<any>(this.APIUrl); 
  }

  saveTypeAppliance(typeAppliance: TypeApplianceDto) : Observable<any> {
    return this.http.post<any>(this.APIUrl , typeAppliance);
  }

  updateTypeAppliance(typeAppliance: TypeApplianceDto) : Observable<any> {
    return this.http.put<any>(this.APIUrl, typeAppliance);
  }

  deleteTypeAppliance(id: number) : Observable<any> {
    return this.http.delete<any>(this.APIUrl + id);
  }
}
