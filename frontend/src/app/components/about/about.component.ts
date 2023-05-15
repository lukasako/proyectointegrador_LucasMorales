import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/model/user.model';
import { TokenService } from 'src/app/service/token.service';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  usuario: usuario = null;

  constructor(public sUsuario: UserService, private tokenService: TokenService){}
  isLogged=false;

  ngOnInit(): void {
    this.cargarUsuario();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    } 
  }

  cargarUsuario(){
    this.sUsuario.detail(2).subscribe(data=>{this.usuario=data})
  }


}
