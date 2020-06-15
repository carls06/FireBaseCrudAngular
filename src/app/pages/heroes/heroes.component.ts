import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    heroes:HeroeModel[]=[];
  constructor(private heroesS:HeroesService) { }

  ngOnInit(): void {
      this.heroesS.getHeroe()
      .subscribe(resp=>{
          console.log(resp);
          this.heroes=resp;
          
          
      });
  }

  
}
