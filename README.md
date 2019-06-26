# trabalhando-com-formulario

[Visualize e edite no StackBlitz ⚡️](https://stackblitz.com/edit/trabalhando-com-formulario)

## Definição
Esta aplicação visa exemplificar variações de validação com [Reactive Forms](https://angular.io/guide/reactive-forms) do Angular 2+

As validações customizadas são definidas em classes externas podendo ser reutilizada.

## Tópicos abordados
> **Formulário 1:** Realiza **validação nativa** utilizando a classe  [Validators](https://angular.io/api/forms/Validators) presente no pacote [@angular/forms](https://angular.io/api/forms).

> **Formulário 2:** Realiza **validação customizada de um único Form Control**, utilizando uma classe externa que obtém o Form Control, valida seu valor e define ou não um erro.

> **Formulário 3:** Realiza **validação customizada de dois ou mais Form Control dependentes**, utilizando uma classe externa que obtém os dois ou mais Form Control, valida seus valores e define ou não um erro.

> **Formulário 4:** Realiza **validação customizada de um único Form Control com parâmetros**, utilizando uma classe externa que obtém o Form Control, valida seu valor baseado no parâmetro informado e define ou não um erro.

## Como usar
Esta aplicação precisa ter instalado NodeJS e npm, click [aqui](https://nodejs.org/) para ir ao site oficial.

Com tudo configurado, abra seu terminal de preferência e vá até a pasta `trabalhando-com-formulario`.

Execute `npm i` para instalar todas as dependências. Este processo pode demorar um pouco.

Execute `ng serve` para iniciar a aplicação.

Execute `ctrl + c` e `S` após, para parar a aplicação.
