import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Fernando',
    apellido: 'Herrera',
    correo: 'fernando@gmail.com',
    numberCard: '',
    pais: 'CRI',
    genero: 'M'
  }

  codSeg : any;

  paises: any[] = [];

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {

    this.paisService.getPaises()
      .subscribe( paises => {
        console.log("resp", paises);
        this.paises = paises;

        this.paises.unshift({
          nombre: '[ Seleccione Pais]',
          codigo: ''
        })

        // console.log( this.paises );
      });

  }


  guardar( forma: NgForm ) {
    console.log( forma );

    if ( forma.invalid ) {

      Object.values( forma.controls ).forEach( control => {
        control.markAsTouched();
      });

      return;
    }


    console.log( forma.value );
  }

}
