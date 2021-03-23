import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CuitService {

  url = environment.url + "cuit/";

  constructor(private http: HttpClient) { }

  async verificarCuit(cuit){
    try{
      var paquete = {
        cuit: cuit
      }
      var respuesta;

      respuesta = await this.http.post(this.url, paquete, {responseType: "text"}).toPromise();

      return respuesta;
     }
     catch(e){
      console.log(e);
     }
  }

}
