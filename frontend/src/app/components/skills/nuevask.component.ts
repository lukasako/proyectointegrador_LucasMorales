import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-nuevask',
  templateUrl: './nuevask.component.html',
  styleUrls: ['./nuevask.component.css']
})
export class NuevaskComponent implements OnInit{

  nombre:string 
  porcentaje:number

  constructor(private sSkills:SkillsService, private router:Router){}

  ngOnInit(): void {
  }

  onCreate():void{
    const sk = new Skills(this.nombre, this.porcentaje);
    this.sSkills.save(sk).subscribe(data=>{alert("Se agrego con exito"); this.router.navigate(['']);}, err=>{alert("hubo un problema"), this.router.navigate(['']);})
  }
}
