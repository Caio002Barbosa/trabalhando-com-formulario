import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Alert } from '../../model/alert.model';

import { validarData } from './validacaoCustomizada';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.scss']
})
export class Formulario2Component implements OnInit {
  public formulario: FormGroup = new FormGroup({
    nome:           new FormControl('', [Validators.required, Validators.minLength(3)]),
    sobrenome:      new FormControl('', [Validators.required, Validators.minLength(3)]),
    dataNascimento: new FormControl('', [Validators.required, validarData]),
    idade:          new FormControl({disabled: true, value: null})
  });

  alerts: Alert[] = [
    { type: 'success', message: 'Dados estão corretos.' },
    { type: 'danger', message: 'Dados estão invalidos.' }
  ]

  mensagemAlert: Alert = null;

  constructor() { }

  ngOnInit() {
    this.onChanges();
  }

  /** Assina os métodos do Observable. */
  onChanges(): void {
    // Triga a observação para mudanças da data de nascimento
    this.formulario.get('dataNascimento').valueChanges.subscribe(valor => {
      if(this.formulario.get('dataNascimento').valid) {
        // Altera um trecho de formulário
        this.formulario.patchValue({
          idade: this.calcularIdade(this.formulario.get('dataNascimento').value)
        });
      }else {
        // Altera um trecho de formulário
        this.formulario.patchValue({
          idade: null
        });
      }
    });
  }

  /** Fecha a mensagem de alerta. */
  close(alert: Alert) {
    this.mensagemAlert = null;
  }

  /**
   * Calcula idade.
   * @param {Date} Data de nascimento.
   * @return {number} idade.
   */
  calcularIdade(dataNascimento: Date) {
    let hoje: Date = new Date();
    let data_nascimento: Date = new Date(dataNascimento);
    
    const getAge = (d1, d2) => Math.floor((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24 * 365.25));
  
    return getAge(data_nascimento, hoje);
  }

  /** Exibe mensagem de acordo com status do formulário. */
  public validar(): void {
    this.mensagemAlert = (this.formulario.status == 'VALID') ? this.alerts.filter(x => x.type === 'success')[0] : this.alerts.filter(x => x.type === 'danger')[0]
  }
}