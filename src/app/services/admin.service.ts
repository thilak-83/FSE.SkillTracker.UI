import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Profile } from '../model/profile';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  GetProfiles(criteria: string, criteriaValue: string) {
    return this.http.get<Profile[]>(`${environment.apiUrl}api/v1/admin/${criteria}/${criteriaValue}`)
  }
  
}
