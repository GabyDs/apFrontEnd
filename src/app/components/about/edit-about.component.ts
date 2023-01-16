import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/services/image.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit{

  person: persona = null;

  constructor(private personService: PersonaService,private activatedRouter: ActivatedRoute, private router: Router, public imgService: ImageService) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params["id"];
    this.personService.detail(id).subscribe(
      data => {
        this.person = data;
      }, err => {
        alert("Fail");
        this.router.navigate([""]);
      }
    )
  }
  

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params["id"];
    this.person.img = this.imgService.url;
    this.personService.update(id, this.person).subscribe(
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
    const name = "profile_" + id;
    this.imgService.uploadImg($event, name);
  }
}