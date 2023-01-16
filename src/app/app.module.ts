import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { HysComponent } from './components/hys/hys.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';

/* Comunicacion entre backend y frontend */
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './services/interceptor-service';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { EditAboutComponent } from './components/about/edit-about.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NewProjectComponent } from './components/projects/new-project.component';
import { EditProjectComponent } from './components/projects/edit-project.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    HysComponent,
    ProjectsComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienceComponent,
    EditExperienceComponent,
    NewEducationComponent,
    EditEducationComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAboutComponent,
    NewProjectComponent,
    EditProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [
    interceptorProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
