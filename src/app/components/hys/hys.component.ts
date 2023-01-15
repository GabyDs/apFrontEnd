import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {

  skill: Skill[] = [];
  isLogged = false;

  constructor(private skillService: SkillService, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.setSkill();
    
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  setSkill(): void{
    this.skillService.list().subscribe(data => (this.skill = data));
  }

  deleteSkill(id?: number): void{
    if(id != undefined){
      this.skillService.delete(id).subscribe(
        data => {
          this.setSkill();
        }, err => {
          alert("no se pudo borrar");
        }
      )
    }
  }

}
