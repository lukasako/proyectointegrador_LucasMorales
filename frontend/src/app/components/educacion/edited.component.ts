import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edited',
  templateUrl: './edited.component.html',
  styleUrls: ['./edited.component.css']
})
export class EditedComponent {
  edu: Educacion = null;

  constructor(private sEducacion: EducacionService, private activatedRoute: ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sEducacion.detail(id).subscribe(data=>{this.edu=data;},err=>{alert('error'); this.router.navigate(['']);})
  }
  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sEducacion.update(id, this.edu).subscribe(data=> {this.router.navigate(['']);}, err=>{alert('error'); this.router.navigate(['']);})
  }
}