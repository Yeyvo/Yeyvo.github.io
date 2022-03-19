import {Component, OnInit} from '@angular/core';
import {NgsRevealConfig} from "ngx-scrollreveal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Yeyvo-Portfolio';


  typeWrite(elemento: any) {
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = " ";
    textoArray.forEach(function (letra: string, i: number) {
      setTimeout(function () {
        elemento.innerHTML += letra;
      }, 100 * i);
    });
  }



  constructor(revealConfig: NgsRevealConfig) {
    revealConfig.origin = "top"
    revealConfig.distance = "50px"
    revealConfig.duration = 2000
  }

  ngOnInit(): void {
    this.typeWrite(document.querySelector(".fin"));
  }


}
