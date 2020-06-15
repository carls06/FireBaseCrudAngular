import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import {  NgForm } from '@angular/forms';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
    heroe= new HeroeModel();

  constructor(private heroesS:HeroesService) { }

  ngOnInit(): void {
  }
  guardar(form:NgForm){

    if (form.invalid) {
        console.log('Formulario no valido');
        return;
    }  
    Swal.fire({
        
        text:  'Guardando info',
       
        allowOutsideClick:  false
      });
          
    Swal.showLoading();
    
    let peticion:Observable<any>;

    if (this.heroe.id) {
        peticion = this.heroesS.actualizarHeroe(this.heroe);
        
    } else {

        peticion =this.heroesS.crearHeroe(this.heroe);
        
    }

    peticion.subscribe(resp=>{
        Swal.fire({
            title: this.heroe.nombre,
            text: 'Se actualizo correctamente',
            icon: 'success'
        });
    }
    );

   
  }

}
