import { FormControl } from "@angular/forms";

/** Validação customizada de formulário */
export function validarData(control: FormControl): {[key: string]: boolean} {
  // Obtém dados
  const hoje: Date = new Date();
  const dataObtida: Date = new Date(control.value);
  // Verifica se se dia atual é maior 
  if(dataObtida > hoje) return { 'diaInvalido': true }; // Se for inválida irá setar um erro

  return null; // return null se for válido
}
