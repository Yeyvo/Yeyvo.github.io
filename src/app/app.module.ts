import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { FirstComponent } from './first/first.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { CertifsComponent } from './certifs/certifs.component';
import {NgParticlesModule} from "ng-particles";
import {NgsRevealModule} from "ngx-scrollreveal";
import {HttpClientModule} from "@angular/common/http";
import { GithubCardComponent } from './github-card/github-card.component';
import { ButtonComponent } from './button/button.component';
import { CertifCardsComponent } from './certifs/certif-cards/certif-cards.component';
import { TechComponent } from './tech/tech.component';
import {SkillComponent} from "./skills/skill/skill.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FirstComponent,
    PresentationComponent,
    ProjectsComponent,
    EducationComponent,
    CertifsComponent,
    GithubCardComponent,
    ButtonComponent,
    CertifCardsComponent,
    TechComponent,
    SkillComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgParticlesModule,
        NgsRevealModule,
        HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
