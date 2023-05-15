import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-nuevaed',
  templateUrl: './nuevaed.component.html',
  styleUrls: ['./nuevaed.component.css']
})
export class NuevaedComponent implements OnInit{

  nombreE:string = '';
  descripcionE:string='';

  constructor(private sEducacion:EducacionService, private router:Router){}

  ngOnInit(): void {
  }

  onCreate():void{
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.sEducacion.save(educacion).subscribe(data=>{alert("Se agrego con exito"); this.router.navigate(['']);}, err=>{alert("hubo un problema"), this.router.navigate(['']);})
  }

}
