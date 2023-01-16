import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{

  project: Project[] = [];
  isLogged = false;

  constructor(public projectService: ProjectService, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.setProject();
    
    if(this.tokenService.getToken() && this.tokenService.getAuthorities().includes("ROLE_ADMIN")){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  setProject(): void{
    this.projectService.list().subscribe(data => (this.project = data));
  }

  delete(id?: number): void{
    if(id != undefined){
      this.projectService.delete(id).subscribe(
        data => {
          this.setProject();
        }, err => {
          alert("no se pudo borrar");
        }
      )
    }
  }
}
