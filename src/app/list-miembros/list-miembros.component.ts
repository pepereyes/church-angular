import { Component, OnInit } from '@angular/core';
import { Miembro } from '../model/miembro';
import { Router } from '@angular/router';
import { MiembroServiceService } from '../services/miembro-service.service';

@Component({
  selector: 'app-list-miembros',
  templateUrl: './list-miembros.component.html',
  styleUrls: ['./list-miembros.component.css']
})
export class ListMiembrosComponent implements OnInit {

  miembros:Miembro[];
  mensaje:string;
  constructor(
    private router:Router,
    private miembroService:MiembroServiceService) { }

  ngOnInit() {
    this.refreshMiembros();
  }

  refreshMiembros() {
    this.miembroService.retrieveAllMiembros().subscribe(
      response=> {
        console.log(response);
        this.miembros=response;
      }
    )
  }

  eliminarMiembro(id:number) {
    this.miembroService.deleteMiembros(id).subscribe(
      response => {
        this.refreshMiembros();
      }
    )
  }

  agregarMiembro(id:number) {
    this.router.navigate(['miembro', -1])
  }

  modificarMiembro(id:number) {
    this.router.navigate(['miembro', id])
  }

  

}
