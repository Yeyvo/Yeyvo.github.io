import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certif-cards',
  templateUrl: './certif-cards.component.html',
  styleUrls: ['./certif-cards.component.scss']
})
export class CertifCardsComponent implements OnInit {
  @Input()
  data: { name: string, tags: string[], link: string };

  constructor() {
  }

  ngOnInit(): void {
  }

}
