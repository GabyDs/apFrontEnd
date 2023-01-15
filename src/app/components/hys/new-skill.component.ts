import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  nameS: string;
  percentS: number;

  constructor(private skillService: SkillService, private router: Router) {}

  ngOnInit(): void {
    
  }

  onCreate(): void{
    const skill = new Skill(this.nameS, this.percentS);
    this.skillService.save(skill).subscribe(
      data => {
        alert("Created Skill");
        this.router.navigate([""]);
      }, err => {
        alert("Fail");
        this.router.navigate([""]);
      }
    )
  }

}
