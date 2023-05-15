import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { usuario } from 'src/app/model/user.model';
import { ImageService } from 'src/app/service/image.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-editab',
  templateUrl: './editab.component.html',
  styleUrls: ['./editab.component.css']
})
export class EditabComponent implements OnInit{
  usuario: usuario = null;
 
  constructor(private sUsuario: UserService, private activatedRoute: ActivatedRoute, private router:Router, public imageService: ImageService){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sUsuario.detail(id).subscribe(
      data=>{
        this.usuario=data;
      },err=>{
        alert('error al modificar'); 
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.usuario.img = this.imageService.url;
    this.sUsuario.update(id, this.usuario).subscribe(data=> {this.router.navigate(['']);}, err=>{alert('error'); this.router.navigate(['']);})
  }

  uploadImg($event:any){
    const id = this.activatedRoute.snapshot.params['id'];
    const name = 'perfil_' + id;
    this.imageService.uploadImg($event, name);
  }
}
