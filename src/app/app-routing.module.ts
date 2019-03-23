import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiembroComponent } from './miembro/miembro.component';
import { RouteGuardServiceService } from './services/route-guard-service.service';
import { ListMiembrosComponent } from './list-miembros/list-miembros.component';

const routes: Routes = [
  { path: '', component: ListMiembrosComponent },
  { path: 'miembros', component: ListMiembrosComponent, canActivate:[RouteGuardServiceService] },
  { path: 'miembro/:id', component: MiembroComponent, canActivate:[RouteGuardServiceService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
