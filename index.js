import receitasTextos from './src/common/receitas-textos.js'
import crypto from 'node:crypto';
import { criarReceita } from './src/common/utils/criar-receitas.js';
import { exibirReceitas } from './src/common/utils/exibir-receitas.js';
import { deletarReceita } from './src/common/utils/deletar-receita.js';
const uuid = crypto.randomUUID();
const nomeEmpresa = 'Gama';
 
global.receitas = [{
    id:'3c52fd82-f706-4b08-a5f4-d6b99f885c6c',
    titulo:'Risoto de Abobora',
    nivelDificuldade:'simples',
    ingredientes: receitasTextos.ingredientesRisoto,
    instrucoes: receitasTextos.modoPreparoRisoto,
    linkVideo: 'https://www.youtube.com/watch?v=Mxc3RQE4yAg',
    vegana: false,
}]

console.log(`***************${nomeEmpresa}*****************`);
console.log('Bem vind@ a nossa página de receitas');
criarReceita({
    titulo:'Pão de queiojo',
    nivelDificuldade:'simples',
    ingredientes: '',
    instrucoes: '',
    linkVideo: '',
    vegana: false,
});

deletarReceita("3c52fd82-f706-4b08-a5f4-d6b99f885c6c");
exibirReceitas();
console.log(receitas);