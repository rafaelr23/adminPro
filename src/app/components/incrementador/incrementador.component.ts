import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtprogress') txtprogress: ElementRef;
 // tslint:disable-next-line: no-input-rename
 @Input('nombre') leyenda: string = 'Leyenda';
 // tslint:disable-next-line: no-input-rename
 @Input('porcentaje') porcentaje: number = 50;

// tslint:disable-next-line: align
// tslint:disable-next-line: no-output-rename
@Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log('Leyenda', this.leyenda);
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onChanges( newValor: number ) {
    // const HTMLPorcentaje: any = document.getElementsByName('porcentaje')[0];
    console.log( this.txtprogress );
    if ( newValor > 100 ){
        this.porcentaje = 100;
      }else if (newValor < 0){
        this.porcentaje = 0;
      }else{
        this.porcentaje = newValor;
      }
    // HTMLPorcentaje.value = this.porcentaje;
    this.txtprogress.nativeElement.value = this.porcentaje;
    this.cambioValor.emit( this.porcentaje );
  }
  // tslint:disable-next-line: typedef
  cambiarValor( valor: number ) {
    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + valor;
    this.cambioValor.emit( this.porcentaje );
    this.txtprogress.nativeElement.focus();
  }

}
