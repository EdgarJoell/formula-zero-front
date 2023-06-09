import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart-api.service';
import { ExperiencesService } from 'src/app/services/experiences-api.service';

@Component({
  selector: 'app-individual-experiences',
  templateUrl: './individual-experiences.component.html',
  styleUrls: ['./individual-experiences.component.css']
})
export class IndividualExperiencesComponent implements OnInit{
  experiences: any;
  experience: any;




  constructor(private route: ActivatedRoute, private experiencesService: ExperiencesService, private cartService: CartService) { }
  links: any = document.querySelectorAll('other-tracks-links');




  buyExperience() {
    let car = document.querySelector('select');
    this.experience.car = car?.value;
    this.experiencesService.updateExperience(this.experience.car, this.experience.id).subscribe(car =>{
      console.log(car)
      this.cartService.postCart(1, this.experience.id).subscribe(cart => {
        console.log(cart);
      })
    });
  }



  ngOnInit(): void {
    this.experience = this.route.snapshot.paramMap.get('id');
    this.experiencesService.getOneExperience(this.experience).subscribe(p => {
      this.experience = p;
    });
    this.experiencesService.getAllExperiences().subscribe(p => { this.experiences = p });
  }
}
