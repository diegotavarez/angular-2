import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]//ao declarar o provider no componente, ele terá sua própria instância do serviço.
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  //cursosService: CursosService;

  constructor(private cursosService: CursosService) {
    //this.cursosService = new CursosService();
    //this.cursosService = _cursosService;
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    // this.cursosService.emitirCursoCriado.subscribe(
    //   function (curso){
    //     console.log(curso);
    //   }
    // );

    CursosService.criouNovoCurso.subscribe(
//arrow function
//      curso => console.log(curso)
      curso => this.cursos.push(curso)

    );
  }

}
