import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Miembro } from '../model/miembro';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class MiembroServiceService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllMiembros() {
    let username = 'user';
    let password = '9dcba06c-f401-4b20-91ac-378705a1d16f';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorization:basicAuthHeaderString
    })
    return this.http.get<Miembro[]>(`${API_URL}/miembros`, {headers});
  }

  retrieveMiembro(id:number) {
    let username = 'user';
    let password = '9dcba06c-f401-4b20-91ac-378705a1d16f';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorization:basicAuthHeaderString
    })
    return this.http.get<Miembro>(`${API_URL}/miembro/${id}`, {headers});
  }

  deleteMiembros(id:number) {
    let username = 'user';
    let password = '9dcba06c-f401-4b20-91ac-378705a1d16f';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorization:basicAuthHeaderString
    })
    return this.http.delete(`${API_URL}/miembro/${id}`, {headers});
  }

  guardarMiembro(miembro:Miembro) {
    let username = 'user';
    let password = '9dcba06c-f401-4b20-91ac-378705a1d16f';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorization:basicAuthHeaderString
    })
    return this.http.post(`${API_URL}/miembro`,miembro, {headers});
  }

  modificarMiembro(miembro:Miembro) {
    let username = 'user';
    let password = '9dcba06c-f401-4b20-91ac-378705a1d16f';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorization:basicAuthHeaderString
    })
    return this.http.put(`${API_URL}/miembro`,miembro, {headers});
  }


}
