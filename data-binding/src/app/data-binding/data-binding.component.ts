import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {

  url: string = 'http:/loiane.com';
  cursoAngular: boolean = true;
  urlImagem:string = 'http://lorempixel.com/400/200/nature/';

  conteudoAtual:string = '';
  conteudoSalvo:string = '';

  isMouseOver: boolean = false;

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

}
