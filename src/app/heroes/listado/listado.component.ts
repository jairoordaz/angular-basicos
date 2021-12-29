import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  public heroeBorrado:string = "";

heroes: string[] = [
  'spiderman',
  'ironman',
  'hulk',
  'thor',
  'capitan america'
];

borrarHeroe (){
  const heroeBorrado = this.heroes.shift() || '';
  console.log(heroeBorrado);
  this.heroeBorrado = heroeBorrado;
}

}
