import { Component, OnInit } from '@angular/core';
import { faStar as FullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as EmptyStar } from '@fortawesome/free-regular-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { CategoryInfo } from 'src/app/Model/CategoryInfo';
import { SkillFetchService } from 'src/app/Service/SkillFetch/skill-fetch.service';
import { EducationService as EducationFetchService } from 'src/app/Service/EducationFetch/education-fetch.service';
import { EducationInfo } from 'src/app/Model/EducationInfo';
import { ExperienceFetchService } from 'src/app/Service/ExperienceFetch/experience-fetch.service';
import { ExperienceInfo } from 'src/app/Model/ExperienceInfo';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private _skillService:SkillFetchService, private _educationFetch : EducationFetchService,private _experienceFetch : ExperienceFetchService, library : FaIconLibrary) { 
    library.addIcons(FullStar,EmptyStar)
  }
  public CategoryList:CategoryInfo[] = []
  public EducationList:EducationInfo[] = []
  public ExperienceList:ExperienceInfo[] = []

  ngOnInit(): void {
    this._skillService.Fetch().subscribe({
      next: response => this.CategoryList = response.content,
      error: error => console.log("Une erreur c'est produite"),
      complete: () => console.log(this.CategoryList)
      }
    )

    this._educationFetch.Fetch().subscribe({
      next: response => this.EducationList = response.content,
      error: error => console.log("Une erreur c'est produite"),
      complete: () => console.log(this.EducationList)
      }
    )

    this._experienceFetch.Fetch().subscribe({
      next: response => this.ExperienceList = response.content,
      error: error => console.log("Une erreur c'est produite"),
      complete: () => console.log(this.ExperienceList)
      }
    )
  } 

}
