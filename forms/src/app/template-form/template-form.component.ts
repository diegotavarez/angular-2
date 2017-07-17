import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  };

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit(form){
    //console.log('form',form);
    //console.log(this.usuario);
    //resttestest.com
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
    .map(res => res)
    .subscribe((dados) => console.log(dados));
  }

  verificaValidTouched(campo){
    return !campo.valid && campo.touched;
  }

  aplicaCSSErro(campo){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(cep, form){
    cep = cep.replace(/\D/g, '');

    if (cep != ''){
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if(validacep.test(cep)) {
          this.resetaDadosForm(form);
        
          this.http.get(`//viacep.com.br/ws/${cep}/json`)
          .map(dados => dados.json())
          .subscribe((dados) => this.populaDadosForm(dados, form));
      }
    }
  }

  resetaDadosForm(formulario){
      formulario.form.patchValue({
        endereco: {
          cep: null,
          complemento: null,
          rua: null,
          bairro: null,
          cidade: null,
          estado: null 
        }
      });
  }
  populaDadosForm(dados, formulario){
    // formulario.setValue({
    //   nome: formulario.value.nome,
    //   email: formulario.value.nome,
    //   endereco: {
    //     cep: dados.cep,
    //     numero: '',
    //     complemento: dados.complemento,
    //     rua: dados.logradouro,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.uf  
    //   }
    // });

    formulario.form.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf  
      }
    });
  }

}
