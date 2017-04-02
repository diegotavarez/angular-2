import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contador',
  template: '<div> <button type="button" class="btn btn-primary" (click)="decrementa()" >-</button> <input type="text" [value]="valor" readonly> <button type="button" class="btn btn-primary" (click)="incrementa()" >+</button> </div>',
})
export class OutputPropertyComponent  {
  constructor() {  }

  @Input()
  valor : number = 0;

  @Output('eventoMudouValor')
  mudouValor = new EventEmitter();

  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }
}
