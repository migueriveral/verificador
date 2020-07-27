import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CuitService {

  url = "https://stormy-tor-26129.herokuapp.com/";

  constructor(private http: HttpClient) { }

  async verificarCuit(cuit){
    try{
      var respuesta;

      respuesta = await this.http.post(this.url+"cuit/", cuit, {responseType: "text"}).toPromise();

      return respuesta;
     }
     catch(e){
      console.log(e);
     }
  }

}
