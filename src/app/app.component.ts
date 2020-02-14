import { Component, OnInit } from '@angular/core';
import { SuperheroesService } from './services/superheroes.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {
heroe:any;
id:any;
selected:any;
heroesImg:any;
  constructor(private superheroesService: SuperheroesService) { }

  ngOnInit() {
this.byId("70")
}

byId (id) {
  this.heroesImg = "";
  this.superheroesService.getHeroesById(id).subscribe(heroe=> {
    this.heroe = heroe;
console.log(this.heroe)
this.getImg(id)
})
}

getImg(id) {
  this.superheroesService.getHeroesImg(id).subscribe(img => {
    this.heroesImg = img.url;
console.log(this.heroesImg)
})
}
selectedHero(heroe) {
  this.selected = heroe;
}
  // byName() {
  //   this.superheroesService.getHeroesByName().subscribe(heroes => {
  //       this.heroe = heroes;
  //   console.log(this.heroe)
  //     })
  // }
}