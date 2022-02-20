import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {GithubService} from "../services/github.service";
import {Renderer} from "@angular/compiler-cli/ngcc/src/rendering/renderer";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {


  forkWhitelist: string[] = [];
  blacklist: string[] = [];


  visibleProjects: any = [];
  $visibleProject: Subscription;


  constructor(public githubService: GithubService) {
  }

  ngOnDestroy(): void {

    this.$visibleProject.unsubscribe();
  }


  ngOnInit(): void {


    this.$visibleProject = this.githubService.getAllProjects().subscribe((project: any[]) => {
      for (const projectElement of project) {
        if ((this.forkWhitelist.indexOf(projectElement.full_name) != -1 || projectElement.fork == false ) && this.blacklist.indexOf(projectElement.full_name) == -1 ) {
          this.visibleProjects.push(projectElement);

        }
      }

    });

  }



}
