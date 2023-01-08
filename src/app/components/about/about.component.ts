import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  persona: persona = new persona("", "", "");

  constructor(public personaService: PersonaService){}

  ngOnInit(): void{

    this.personaService.getPersona().subscribe(data => {this.persona = data})

  }

}
