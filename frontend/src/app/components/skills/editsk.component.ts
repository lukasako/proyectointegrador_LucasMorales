import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-editsk',
  templateUrl: './editsk.component.html',
  styleUrls: ['./editsk.component.css']
})
export class EditskComponent implements OnInit {
 
  skills: Skills = null;

  constructor(private sSkills:SkillsService, private activatedRoute: ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sSkills.detail(id).subscribe(data=> {this.skills = data}, err=>{alert('error'); this.router.navigate(['']);})
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sSkills.update(id, this.skills).subscribe(data=> {this.router.navigate(['']);}, err=>{alert('error'); this.router.navigate(['']);})
  }
}
