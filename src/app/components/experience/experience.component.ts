import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { SExperienceService } from 'src/app/services/s-experience.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{

  exp: Experience[] = [];

  constructor(private sExperience: SExperienceService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {

    this.setExperience();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  setExperience(): void{
    this.sExperience.list().subscribe(data => (this.exp = data));
  }

  deleteExperience(id?: number): void{
    if(id != undefined){
      this.sExperience.delete(id).subscribe(
        data => {
          this.setExperience();
        }, err => {
          alert("no se pudo borrar");
        }
      )
    }
  }

}