import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EducationInfoResponse } from 'src/app/Model/EducationInfoResponse';
import { ApiFullUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private httpClient: HttpClient)
  {

  }

  public Fetch(): Observable<EducationInfoResponse>
  {
    return this.httpClient.get<EducationInfoResponse>(ApiFullUrl+"/Portfolio/API/EDUCATION/LIST");
  }

}