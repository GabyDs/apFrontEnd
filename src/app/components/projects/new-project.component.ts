import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ImageService } from 'src/app/services/image.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  name: string = '';
  description: string = '';
  img: string = '';

  constructor(private projectservice: ProjectService, private router: Router, public imgService: ImageService){}

  ngOnInit(): void {
    
  }

  onCreate(): void{
    this.img = this.imgService.url;
    
    const pro = new Project(this.name, this.description, this.img);
    this.projectservice.save(pro).subscribe(data => {
      alert("Project created");
      this.router.navigate(['']);
    }, err => {
      alert("Fail");
      this.router.navigate(['']);
    })
  }

  uploadImg($event: any) {
    const name = "project";
    this.imgService.uploadImg($event, name);
  }

}
