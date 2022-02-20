import {Component, OnInit} from '@angular/core';
import {Container, Main, particlesJS} from "tsparticles";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  particlesOptions = {
    fullScreen: {
      enable: false,
      zIndex: 0
    },
    particles: {
      number: {
        value: 50,
        density: {enable: true, value_area: 833.451405615796},
      },
      color: {value: "#ffffff"},
      shape: {
        type: ["image"],
        stroke: {width: 0, color: "#000000"},
        polygon: {nb_sides: 5},
        image: {
          src: "",
          width: 1,
          height: 1,
        },
      },
      opacity: {
        value: 0.7,
        random: false,
        anim: {enable: false, speed: 1, opacity_min: 0.1, sync: false},
      },
      size: {
        value: 90,
        random: true,
        anim: {enable: false, speed: 40, size_min: 0.1, sync: false},
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {enable: false, rotateX: 600, rotateY: 1200},
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {enable: false, mode: "repulse"},
        onclick: {enable: false, mode: "repulse"},
        resize: true,
      },
      modes: {
        repulse: {distance: 200, duration: 0.4},
      },
    },
    retina_detect: true,

  };

  id0 = "zeroParticles";
  id1 = "oneParticles";
  one = this.editParticles(this.particlesOptions, "../assets/ressources/img/number-1.png", 10, 50);
  zero = this.editParticles(this.particlesOptions, "../assets/ressources/img/number-0.png", 25, 30);
  myStyle: any;

  constructor() {
  }


  ngOnInit(): void {
    particlesJS(this.id0,this.zero)
    particlesJS(this.id1,this.one)
  }


  editParticles(objet: any, source: string, taille: number, nb: number) {
    var part = JSON.parse(JSON.stringify(objet));
    part.particles.shape.image.src = source;
    part.particles.size.value = taille;
    part.particles.number.value = nb;
    return part;
  }

}
