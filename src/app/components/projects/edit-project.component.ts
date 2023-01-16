import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ImageService } from 'src/app/services/image.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent {

  project: Project = null;

  constructor(private projectService: ProjectService,private activatedRouter: ActivatedRoute, private router: Router, public imgService: ImageService) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params["id"];
    this.projectService.detail(id).subscribe(
      data => {
        this.project = data;
      }, err => {
        alert("Fail");
        this.router.navigate([""]);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params["id"];
    this.project.img = this.imgService.url;
    this.projectService.update(id, this.project).subscribe(
      data => {
        this.router.navigate([""]);
      }, err => {
        alert("Fail");
        this.router.navigate([""]);
      }
    )
  }

  uploadImg($event: any) {
    const id = this.activatedRouter.snapshot.params["id"];
    const name = "project_" + id;
    this.imgService.uploadImg($event, name);
  }
}
