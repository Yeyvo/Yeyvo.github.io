window.addEventListener("load", (event) => {
  var part = {
    particles: {
      number: {
        value: 50,
        density: { enable: true, value_area: 833.451405615796 },
      },
      color: { value: "#ffffff" },
      shape: {
        type: ["image"],
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: {
          src: "",
          width: 1,
          height: 1,
        },
      },
      opacity: {
        value: 0.7,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 90,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
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
        speed: 4,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "repulse" },
        onclick: { enable: false, mode: "repulse" },
        resize: true,
      },
      modes: {
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    retina_detect: true,
  };

  function edit(objet, source, taille, number) {
    var part = JSON.parse(JSON.stringify(objet));
    part.particles.shape.image.src = source;
    part.particles.size.value = parseInt(taille);
    part.particles.number.value = number;
    return part;
  }

  let one = edit(part, "ressources/img/number-1.png", 10, 50);
  let zero = edit(part, "ressources/img/number-0.png", 25, 30);

  particlesJS("particles-js", one);
  particlesJS("particles-js2", zero);

  class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
      this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }

    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }

    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    "#lst-nav",
    "#lst-nav li"
  );
  mobileNavbar.init();

  function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = " ";
    textoArray.forEach(function (letra, i) {
      setTimeout(function () {
        elemento.innerHTML += letra;
      }, 100 * i);
    });
  }

  typeWrite(document.querySelector(".fin"));

  const sr = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 2000,
  });

  sr.reveal(".wrapper", { delay: 200 });
  if (navigator.userAgent.indexOf("Chrome") == -1) {
    sr.reveal("object", {}); //delay: 200
  }
  sr.reveal(".fin", { delay: 200 });
  sr.reveal(".first-presentation", { delay: 400 });
  sr.reveal(".github", { delay: 200 });
  sr.reveal(".repo-card", { delay: 300, interval: 200 });
  sr.reveal(".card", { delay: 400, interval: 200 });
  sr.reveal(".img-hello", { delay: 400 });
  sr.reveal(".timeline", { delay: 200 });
  sr.reveal(".desc", { delay: 500 });
  sr.reveal(".time-wrapper", { delay: 300 });

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
});
