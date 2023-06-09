import { Component, OnInit } from '@angular/core';
import { ExperiencesService } from 'src/app/services/experiences-api.service';

@Component({
  selector: 'app-experiences-section',
  templateUrl: './experiences-section.component.html',
  styleUrls: ['./experiences-section.component.css']
})
export class ExperiencesSectionComponent implements OnInit{
  constructor(private experiencesService: ExperiencesService) {}

  experiences: any = [];

  ngOnInit(): void {
    this.experiencesService.getAllExperiences().subscribe(p => {this.experiences = p
    console.log(p);
    });
  }
}
