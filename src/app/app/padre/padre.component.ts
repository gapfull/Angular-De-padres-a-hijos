import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent implements OnInit {
  public inputText: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  cargamosLetra(letra: string) {
    this.inputText = letra;
  }

}
