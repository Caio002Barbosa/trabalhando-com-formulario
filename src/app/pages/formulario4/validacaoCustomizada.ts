import { AbstractControl, ValidatorFn } from '@angular/forms';

/** Validação customizada de formulário */
export const validarEmail = (dominio: string): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    // Verifica se tem dado para ser validado
    if (control.value !== null) {
      const [_, eDomain] = control.value.split('@'); // Obtém o domínio após o @
      if (eDomain !== dominio) // Verifica se o domínio é equivalente ao setado
        return { emailInvalido: true } // return erro caso seja incompatível
    }
    return null; // return null se não existir dado
  };
}