import { AbstractControl, ValidatorFn } from '@angular/forms';

/** Validação customizada de formulário */
export function validarEmail(dominio: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {    
    // Verifica se tem dado para ser validado
    if (control.value !== null) {
      const [_, eDomain] = control.value.split('@'); // Obtém o domínio após o @
      return eDomain !== dominio // Verifica se o domínio é equivalente ao setado
        ? { emailInvalido: true } // return erro caso seja incompatível
        : null; // return null se for compatível
    }
    return null; // return null se não existir dado
  };
}