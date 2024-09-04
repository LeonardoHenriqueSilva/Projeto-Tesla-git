/* Document é igual a ir no HTML  --  querSelector busca um elemento especifico 
 Para buscar o elemento nesse caso dentro do parenteses coloco "" e depos um ponto
 pois vamos buscar uma classe EX: (".formulario")*/

let formulario = document.querySelector(".formulario") /*criei uma variavel, fui na html e selecionei a 
classe formulario*/

console.log(formulario) // console.log mostra tudo o que guardei na variavel formulario


/*// Criei uma função e dei um nome de aparecerFormulario, essa função vai fazer aparecer o formulario
(observação, no css estilizei dentro da caixa formulario um left: 50% que mandou o formulário para o meio
da tela, porem agora vou mudar para -50% que vai fazer que ele fique fora da nossa visão, ou seja, 50%
para fora da nossa tela) */
function aparecerFormulario(){ 
    formulario.style.left = "45%" /* quando a função for chamada o left que esta -45% vai ficar +45% - 
    modifique o estilo*/
}

function desaparecerFormulario(){ /*  da mesma maneira que fiz acima quando a função for chamada o 
    left que esta +45% vai ficar -45% e assim vai desaparecer - modifique o estilo*/
    formulario.style.left = "-45%"
}