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
  
  constructor(
    private formBuilder: FormBuilder,
    private http: Http) { }

  ngOnInit() {

    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: [null, [Validators.required, Validators.email]],
    });

  }

  onSubmit(){
    console.log(this.formulario);
        this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
    .map(res => res)
    .subscribe((dados) => {
      console.log(dados);
      this.onReset();
    },
  (error: any) => alert('erro'));
  }

  onReset(){
    this.formulario.reset();
  }

  verificaValidTouched(campo){
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

    verificaEmailIvalido(campo){
      const campoEmail = this.formulario.get(campo);
      if(campoEmail.errors){
        return campoEmail.errors['email'] && campoEmail.touched;
      }
  }

  aplicaCSSErro(campo){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

}
