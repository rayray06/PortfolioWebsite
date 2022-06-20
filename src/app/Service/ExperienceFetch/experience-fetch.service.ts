import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienceInfoResponse } from 'src/app/Model/ExperienceInfoResponse';
import { ApiFullUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienceFetchService {

  constructor(private httpClient: HttpClient)
  {

  }

  public Fetch(): Observable<ExperienceInfoResponse>
  {
    return this.httpClient.get<ExperienceInfoResponse>(ApiFullUrl+"/Portfolio/API/EXPERIENCE/LIST");
  }
}
