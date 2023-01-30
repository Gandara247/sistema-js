function exibirReceitas(){
    const receitasDesconstruidas = [];
    global.receitas.map(item =>{
        const {titulo, ingredientes, vegana} = item;
        receitasDesconstruidas.push({
            titulo,
            ingredientes,
            vegana,
        })
    })
    console.log(receitasDesconstruidas);
}

export {exibirReceitas}