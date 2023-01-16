import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutComponent } from './components/about/edit-about.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { HomeComponent } from './components/home/home.component';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { LoginComponent } from './components/login/login.component';
import { EditProjectComponent } from './components/projects/edit-project.component';
import { NewProjectComponent } from './components/projects/new-project.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newexp', component: NewExperienceComponent },
  { path: 'editexp/:id', component: EditExperienceComponent },
  { path: 'newedu', component: NewEducationComponent },
  { path: 'editedu/:id', component: EditEducationComponent },
  { path: 'newskill', component: NewSkillComponent },
  { path: 'editskill/:id', component: EditSkillComponent },
  { path: 'editabout/:id', component: EditAboutComponent },
  { path: 'newproject', component: NewProjectComponent },
  { path: 'editproject/:id', component: EditProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
