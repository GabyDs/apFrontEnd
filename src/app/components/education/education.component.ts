import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education: Education[] = [];

  constructor(private sEducation: EducationService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {

    this.setEducation();

    if(this.tokenService.getToken() && this.tokenService.getAuthorities().includes("ROLE_ADMIN")){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    
  }

  setEducation(): void{
    this.sEducation.list().subscribe(
      data => {
        this.education = data;
      }
    )
  }

  delete(id: number): void{
    if(id != undefined){
      this.sEducation.delete(id).subscribe(
        data => {
          this.setEducation();
        }, err => {
          alert("no se puede eliminar esa educacion");
        }
      )
    }
  }
}
