import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {GithubService} from "../services/github.service";

@Component({
  selector: 'app-github-card',
  templateUrl: './github-card.component.html',
  styleUrls: ['./github-card.component.scss']
})
export class GithubCardComponent implements OnInit, OnDestroy {
  @Input()
  data: any;

  $colors: Subscription;
  colors: any ;
  evenIfNull: boolean = true;

  constructor(private github : GithubService) { }

  ngOnInit(): void {
    this.$colors = this.github.getColors().subscribe((x) =>{ this.colors = x}) ;
    // const emojis = await this.get("https://api.github.com/emojis");
  }

  ngOnDestroy(): void {
    this.$colors.unsubscribe();
  }

}
