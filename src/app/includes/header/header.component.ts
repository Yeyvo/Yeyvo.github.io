import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChildren('links') navLinks:QueryList<ElementRef>;

  activeClass = "active";

  constructor() { }

  ngOnInit(): void {
  }

  animateLinks(orientation:string) {
    this.navLinks.forEach((link, index) => {
      link.nativeElement.style.animation
        ? (link.nativeElement.style.animation = "")
        : (link.nativeElement.style.animation = `navLinkFade 0.5s ease ${orientation} ${ index / 7 + 0.3 }s`);
    });
    this.navLinks.forEach((item, index) => {

    })
  }

  handleClickMenu() {
    this.isActive = !this.isActive;
    // this.navList.classList.toggle(this.activeClass);
    // this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks("forwards");

  }

  handleClickLinks() {
    this.isActive = !this.isActive;
    this.animateLinks("backward");

  }

// const mobileNavbar = new MobileNavbar(
//   ".mobile-menu",
//   "#lst-nav",
//   "#lst-nav li"
// );
// mobileNavbar.init();
  isActive: boolean = false;


}
