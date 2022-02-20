import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()
  data: {isImage:boolean ,link: string, image: string, txt:string ,classList : string[]};

  classes : string;

  constructor() { }

  ngOnInit(): void {
    for (const c of this.data.classList) {
      this.classes += c + " ";
    }

  }

}
