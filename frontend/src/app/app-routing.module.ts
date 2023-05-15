import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NuevaxpComponent } from './components/experiencia/nuevaxp.component';
import { EditXpComponent } from './components/experiencia/edit-xp.component';
import { NuevaedComponent } from './components/educacion/nuevaed.component';
import { EditedComponent } from './components/educacion/edited.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaxp', component: NuevaxpComponent},
  {path:'editxp/:id', component: EditXpComponent},
  {path:'nuevaed', component: NuevaedComponent},
  {path:'edited/:id', component: EditedComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
