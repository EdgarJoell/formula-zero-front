import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperiencesService } from 'src/app/services/experiences-api.service';

@Component({
  selector: 'app-individual-experiences',
  templateUrl: './individual-experiences.component.html',
  styleUrls: ['./individual-experiences.component.css']
})
export class IndividualExperiencesComponent implements OnInit{
 
  // public id: string | null;
  // experience: any;

  // constructor(private route: ActivatedRoute, private router: Router, private experiencesService: ExperiencesService) {
  //   this.id = this.route.snapshot.paramMap.get('id');
  // } 

  // ngOnInit(): void {
  //   this.route.paramMap.subscribe(data => {
  //     this.id = data.get('id'); 
  //     this.experience = this.experiencesService.getOneExperience(parseInt(newId));
  //   });
  // }

  experience: any ;

  constructor(private route: ActivatedRoute, private experiencesService: ExperiencesService) { }

  ngOnInit(): void {
    this.experience = this.route.snapshot.paramMap.get('id');
    this.experiencesService.getOneExperience(this.experience).subscribe(p => {
      this.experience = p;
      console.log(p);
    });
  }
}
