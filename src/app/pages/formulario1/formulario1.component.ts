import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Alert } from '../../model/alert.model';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.scss']
})
export class Formulario1Component implements OnInit { 
  public formulario: FormGroup = new FormGroup({
    nome:      new FormControl('', [Validators.required, Validators.minLength(3)]),
    sobrenome: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  alerts: Alert[] = [
    { type: 'success', message: 'Dados estão corretos.' },
    { type: 'danger', message: 'Dados estão invalidos.' }
  ]

  mensagemAlert: Alert = null;

  constructor() { }

  ngOnInit() { }

  /**
   * Fecha a mensagem de alerta.
   */
  close(alert: Alert) {
    this.mensagemAlert = null;
  }

  /**
   * Exibe mensagem de acordo com status do formulário.
   */
  public validar(): void {
    this.mensagemAlert = (this.formulario.status == 'VALID') ? this.alerts.filter(x => x.type === 'success')[0] : this.alerts.filter(x => x.type === 'danger')[0]
  }

}
