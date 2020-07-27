import { Component, OnInit } from '@angular/core';
import { CuitService } from '../cuit.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  cuit = "";
  mensaje = "";

  constructor(private cuitService: CuitService) { }

  ngOnInit(): void {
  }

  async verificar(){

    this.mensaje = await this.cuitService.verificarCuit(this.cuit);

    console.log("estoy en form component");

  }

}
