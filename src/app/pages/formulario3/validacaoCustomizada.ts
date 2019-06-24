import { FormGroup } from '@angular/forms';

/** Validação customizada de formulário */
export function CompararCampos(campo1Control: string, campo2Control: string): any {
  return (formGroup: FormGroup) => {
    // Obtém dados
    const campo1 = formGroup.controls[campo1Control];
    const campo2 = formGroup.controls[campo2Control];
    
    // Compara campos
    if (campo1.value !== campo2.value) {
      campo2.setErrors({ campoIncompativel: true }); // Se forem incompatíveis irá setar um erro
    } else {
      campo2.setErrors(null); // return null se for válido
    }
  };
}