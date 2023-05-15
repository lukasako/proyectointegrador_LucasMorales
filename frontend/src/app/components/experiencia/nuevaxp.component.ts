import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-nuevaxp',
  templateUrl: './nuevaxp.component.html',
  styleUrls: ['./nuevaxp.component.css']
})
export class NuevaxpComponent implements OnInit{

  nombreE:string = '';
  descripcionE:string='';

  constructor(private sExperiencia:SExperienciaService, private router:Router){}

  ngOnInit(): void {
  }

  onCreate():void{
    const xp = new Experiencia(this.nombreE, this.descripcionE);
    this.sExperiencia.save(xp).subscribe(data=>{alert("Se agrego con exito"); this.router.navigate(['']);}, err=>{alert("hubo un problema"), this.router.navigate(['']);})
  }

}
