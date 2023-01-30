import receitasTextos from './src/common/receitas-textos.js'
import crypto from 'node:crypto';
import { criarReceita } from './src/common/utils/criar-receitas.js';
import { exibirReceitas } from './src/common/utils/exibir-receitas.js';
const uuid = crypto.randomUUID();
const nomeEmpresa = 'Gama';

global.receitas = [{
    id:uuid,
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

exibirReceitas();
console.log(receitas);