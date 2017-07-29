import { Estadobr } from './../shared/models/estadobr.model';
import { DropdownService } from './../shared/services/dropdown.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  formulario: FormGroup;
  estados: Estadobr[];
  
  constructor(
    private formBuilder: FormBuilder,
    private http: Http,
    private dropdownService: DropdownService
  ) { }

  ngOnInit() {

    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });
    this.dropdownService.getEstadosBr()
    .subscribe((dados) => { this.estados = dados; console.log(dados)});

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
      
    });

  }

  onSubmit(){
    console.log(this.formulario);

    if (this.formulario.valid) {
        this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .map(res => res)
        .subscribe((dados) => {
          console.log(dados);
          this.onReset();
        },
      (error: any) => alert('erro'));
    } else {
      console.log("formulario invalido");
      this.verificaValidacoesFormulario(this.formulario);
    }
  }

  verificaValidacoesFormulario(formGroup: FormGroup){
      Object.keys(formGroup.controls).forEach( (campo) => {
        const controle = formGroup.get(campo);
        controle.markAsDirty();
        if(controle instanceof FormGroup){
          this.verificaValidacoesFormulario(controle);
        }
      } );


  }

  onReset(){
    this.formulario.reset();
  }

  verificaValidTouched(campo: string){
    return !this.formulario.get(campo).valid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
  }

    verificaEmailIvalido(campo: string){
      const campoEmail = this.formulario.get(campo);
      if(campoEmail.errors){
        return campoEmail.errors['email'] && campoEmail.touched;
      }
  }

  aplicaCSSErro(campo: string){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(){
    let cep = this.formulario.get('endereco.cep').value;
    cep = cep.replace(/\D/g, '');

    if (cep != ''){
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if(validacep.test(cep)) {
          this.resetaDadosForm();
        
          this.http.get(`//viacep.com.br/ws/${cep}/json`)
          .map(dados => dados.json())
          .subscribe((dados) => this.populaDadosForm(dados));
      }
    }
  }

    populaDadosForm(dados){
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

    this.formulario.patchValue({
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

    resetaDadosForm(){
      this.formulario.patchValue({
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

}
