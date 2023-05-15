import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-xp',
  templateUrl: './edit-xp.component.html',
  styleUrls: ['./edit-xp.component.css']
})
export class EditXpComponent implements OnInit{

  xplab: Experiencia = null;

  constructor(private sExperienciaService: SExperienciaService, private activatedRoute: ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sExperienciaService.detail(id).subscribe(data=>{this.xplab=data;},err=>{alert('error'); this.router.navigate(['']);})
  }
  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sExperienciaService.update(id, this.xplab).subscribe(data=> {this.router.navigate(['']);}, err=>{alert('error'); this.router.navigate(['']);})
  }
}
