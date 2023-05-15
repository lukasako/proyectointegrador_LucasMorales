import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  usuario: usuario = new usuario("","","")

  constructor(public userservice: UserService){ }


  ngOnInit(): void {
    this.userservice.getUsuario().subscribe(data=>{this.usuario =data});
  }


}
