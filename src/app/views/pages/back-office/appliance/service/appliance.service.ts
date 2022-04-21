import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApplianceDto } from '../models/appliance';

@Injectable({
  providedIn: 'root'
})
export class ApplianceService {

  readonly APIUrl = environment.APIUrl + 'appliance/';

  constructor(private http: HttpClient) { }

  findAllAppliances() : Observable<any> {
    return this.http.get<any>(this.APIUrl);
  }

  saveAppliance(appliance: ApplianceDto) : Observable<any> {
    return this.http.post<any>(this.APIUrl , appliance);
  }

  updateAppliance(appliance: ApplianceDto) : Observable<any> {
    return this.http.put<any>(this.APIUrl, appliance);
  }

  deleteAppliance(id: number) : Observable<any> {
    return this.http.delete<any>(this.APIUrl + id);
  }
  
}
