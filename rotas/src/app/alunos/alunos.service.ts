import { Aluno } from './aluno';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {
  private alunos: Aluno[] = [
    new Aluno( 1, 'Aluno 01', 'aluno01@email.com' ),
    new Aluno( 2, 'Aluno 02', 'aluno02@email.com' ),
    new Aluno( 3, 'Aluno 03', 'aluno03@email.com' )
  ]
  getAlunos(){
    return this.alunos;
  }

  getAluno(id: number){
    for (let i = 0; i < this.alunos.length; i++){
      let aluno = this.alunos[i];
      if ( aluno.id == id){
        return aluno;
      }
    }
    return null;
  }

  constructor() { }

}
