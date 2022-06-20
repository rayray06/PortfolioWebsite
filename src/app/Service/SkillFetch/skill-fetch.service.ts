import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryInfoResponse } from 'src/app/Model/CategoryInfoResponse';
import { ApiFullUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillFetchService {

  constructor(private httpClient: HttpClient)
  {

  }

  public Fetch(): Observable<CategoryInfoResponse>
  {
    return this.httpClient.get<CategoryInfoResponse>(ApiFullUrl+"/Portfolio/API/SKILL/LIST");
  }

}