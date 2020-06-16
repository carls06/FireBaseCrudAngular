import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    heroes:HeroeModel[]=[];
    flag=false;


  constructor(private heroesS:HeroesService) { }

  ngOnInit(): void {
      this.flag=true;
      this.heroesS.getHeroes()
      .subscribe(resp=>{
        this.heroes=resp;
        this.flag=false;
            
      });
  }

  borrarHeroe(heroe:HeroeModel, i:number){
      Swal.fire({
          title:'¿Estas Seguro?',
          text:`Esta seguro que desea borrar a ${heroe.nombre}`,
          icon:'question',
          showConfirmButton:true,
          showCancelButton:true
      }).then( resp=>{
        if (resp.value) {
              
            this.heroes.splice(i,1);
            this.heroesS.deleteheroe(heroe.id)
            .subscribe();
          }
      });
  }

  
}
