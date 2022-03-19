import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  baseUrl : String = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

  skills = [
    "spring/spring-original-wordmark.svg",
    "c/c-original.svg",
    "java/java-original-wordmark.svg",
    "javascript/javascript-original.svg",
    "angularjs/angularjs-plain.svg",
    "ionic/ionic-original-wordmark.svg",
    "pandas/pandas-original-wordmark.svg",
    "flask/flask-original-wordmark.svg",
    "git/git-original.svg",
    "html5/html5-original.svg",
    "css3/css3-original.svg",
    "typescript/typescript-original.svg",
    "docker/docker-original-wordmark.svg",
    "tensorflow/tensorflow-original.svg",
    "php/php-original.svg",
    "laravel/laravel-plain-wordmark.svg",
    "r/r-original.svg",
    "sass/sass-original.svg",
    "tomcat/tomcat-original.svg",
    // "redis/redis-original-wordmark.svg",
    "oracle/oracle-original.svg",
    // "postgresql/postgresql-original.svg",
    "numpy/numpy-original.svg",
    // "nginx/nginx-original.svg",
    "mysql/mysql-original.svg",
    "mongodb/mongodb-original-wordmark.svg",
    // "csharp/csharp-original.svg",
    "cplusplus/cplusplus-original.svg",
    "bootstrap/bootstrap-plain-wordmark.svg",
    // "dot-net/dot-net-original.svg",
    // "dotnetcore/dotnetcore-original.svg",
  ]

  constructor() { }

  ngOnInit(): void {
    this.shuffle(this.skills);
  }

  shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

}
