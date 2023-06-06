import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperiencesService } from 'src/app/services/experiences-api.service';

@Component({
  selector: 'app-individual-experiences',
  templateUrl: './individual-experiences.component.html',
  styleUrls: ['./individual-experiences.component.css']
})
export class IndividualExperiencesComponent implements OnInit{
  experiences: any;
  experience: any ;

  constructor(private route: ActivatedRoute, private experiencesService: ExperiencesService) { }
  links: any = document.querySelectorAll('other-tracks-links');
  
  aGenericFunction(this: any, key: string) {
    return this.doStuff(key);
  }

  ngOnInit(): void {
    this.experience = this.route.snapshot.paramMap.get('id');
    this.experiencesService.getOneExperience(this.experience).subscribe(p => {
      this.experience = p;
      console.log(p);
    });
    this.experiencesService.getAllExperiences().subscribe(p => {this.experiences = p
      console.log(p);
      });
  }
}
