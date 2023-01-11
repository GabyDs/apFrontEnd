import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { SExperienceService } from 'src/app/services/s-experience.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {

  nameW: string = '';
  descriptionW: string = '';

  constructor(private sExperience: SExperienceService, private router: Router) {}

  ngOnInit(): void {
  }

  onCreate(): void{
    const exp = new Experience(this.nameW, this.descriptionW);
    this.sExperience.save(exp).subscribe(data => {
      alert("Experience created");
      this.router.navigate(['']);
    }, err => {
      alert("Fail");
      this.router.navigate(['']);
    })
  }

}
