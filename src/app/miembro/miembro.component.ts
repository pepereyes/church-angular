import { Component, OnInit } from '@angular/core';
import { Miembro } from '../model/miembro';
import { Router, ActivatedRoute } from '@angular/router';
import { MiembroServiceService } from '../services/miembro-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-miembro',
  templateUrl: './miembro.component.html',
  styleUrls: ['./miembro.component.css']
})
export class MiembroComponent implements OnInit {

  id:number;
  miembro:Miembro;

  pipe:DatePipe = new DatePipe('en-US');
  constructor(private router:Router,
    private miembroService:MiembroServiceService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.miembro = new Miembro(
      this.id, '', '', '', new Date(),
      '', false, false
    );
    if(this.id!=-1) {
      this.miembroService.retrieveMiembro(this.id).subscribe(
        result=>{
          console.log(result)

          this.miembro.nombre=result.nombre
          this.miembro.direccion=result.direccion
          this.miembro.sexo=result.sexo
          this.miembro.fechaNacimiento=result.fechaNacimiento
          this.miembro.telefono=result.telefono
          this.miembro.comentarios=result.comentarios
        }
      )
    }
  }

  guardarMiembro() {
    console.log(this.miembro.nombre);
    if(this.id==-1) {
      this.miembroService.guardarMiembro(this.miembro).subscribe(
        result=>{
          console.log(result);
        }
      )
    } else {
    this.miembroService.modificarMiembro(this.miembro).subscribe(
      result=>{
        console.log(result);
      }
    )
    }
  }

}
