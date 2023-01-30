function deletarReceita(id){
    const index = global.receitas.findIndex(receita => receita.id === id);
    global.receitas.splice(index, 1);
}

export {deletarReceita};