import { Component, OnInit } from '@angular/core';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { InputPropertyComponent } from './input-property.component';
import {OutputPropertyComponent} from './output-property.component';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http:/loiane.com';
  cursoAngular: boolean = true;
  urlImagem:string = 'http://lorempixel.com/400/200/nature/';

  conteudoAtual : string = '';
  conteudoSalvo : string = '';

  isMouseOver : boolean = false;

  nome : string = 'asd';

  pessoa = {nome: '', idade: 38};

  nomeCurso : string = 'Curso Angular 2';

  valorInicial : number = 10;

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    alert('Botão clicado!');
  }

  onKeyUp(event:any){
    console.log(event);
    this.conteudoAtual = (<HTMLInputElement> event.target).value;
  }

  onSave(valor:string){
    this.conteudoSalvo = valor;
  }

  onMouseSpan(){
    this.isMouseOver = !this.isMouseOver;
  }

  onValorMudou(event){
    alert(event.novoValor);
  }

}
