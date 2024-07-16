// AQUI CRIAMOS TODAS AS PRINCIPAIS CONSTANTES DO CODIGO
const form = document.getElementById('formulario');
const nome = [];
const numero = [];

let linhas ='';

// ESSA FUNÇAO SERVE PARA ADICIONAR O SUBMIT AO ENVIAR O FORMULARIO, E PARA CHAMAR AS DEMAIS FUNÇOES
form.addEventListener('submit',function(e){
  e.preventDefault();

  adicionaLinha();
  atualizaAgenda();
})

// ESSA FUNÇAO FOI PARA ADICIONAR AS LINHAS COM AS NOVAS INFORMAÇOES A NOSSA TABELA
function adicionaLinha(){
  const inputNomeContato = document.getElementById('nome');
  const inputNumeroContato = document.getElementById('numero');

  if(numero.includes(inputNumeroContato.value)){
    alert(`esse numero: ${inputNumeroContato.value} ja foi inserido`);
  } else {
    nome.push(inputNomeContato.value);
    numero.push(inputNumeroContato.value);

  let linha = '<tr>';
  linha += `<td>${inputNomeContato.value}</td>`;
  linha += `<td>${inputNumeroContato.value}</td>`;
  linha += `</tr>`;

  linhas += linha;
  }

  inputNomeContato.value ='';
  inputNumeroContato.value ='';
}

function atualizaAgenda(){
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML  = linhas;
}

