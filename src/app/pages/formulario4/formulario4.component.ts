import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Alert } from '../../model/alert.model';
import { validarEmail } from './validacaoCustomizada';

@Component({
  selector: 'app-formulario4',
  templateUrl: './formulario4.component.html',
  styleUrls: ['./formulario4.component.scss']
})
export class Formulario4Component implements OnInit {

  public formulario: FormGroup = new FormGroup({
    nome:      new FormControl('', [Validators.required, Validators.minLength(3)]),
    sobrenome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email:     new FormControl('', [Validators.compose([Validators.email, validarEmail('gmail.com')])]),
  });

  alerts: Alert[] = [
    { type: 'success', message: 'Dados estão corretos.' },
    { type: 'danger', message: 'Dados estão invalidos.' }
  ]

  mensagemAlert: Alert = null;

  constructor() { }

  ngOnInit() { }

  /** Fecha a mensagem de alerta. */
  close(alert: Alert): void { this.mensagemAlert = null }

  /** Exibe mensagem de acordo com status do formulário. */
  public validar(): void {
    this.mensagemAlert = (this.formulario.status == 'VALID') ? this.alerts.filter(x => x.type === 'success')[0] : this.alerts.filter(x => x.type === 'danger')[0]
  }
}
