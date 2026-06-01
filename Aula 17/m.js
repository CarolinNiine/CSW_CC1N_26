function calcularAniversario(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    let mesAtual = hoje.getMonth();
    let mesNasc = nascimento.getMonth();

    if (mesAtual < mesNasc || (mesAtual === mesNasc && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

        return {
        idade: idade
    };
}

    function executarCalculo() {
    const inputData = document.getElementById('dataNascimento').value;
    const elementoResultado = document.getElementById('resultadoTxt');
    
    if (!inputData) {
        elementoResultado.innerHTML = "Por favor, selecione uma data.";
        return;
    }
    
    const resultado = calcularAniversario(inputData);
    
    elementoResultado.innerHTML = `
        Idade atual: ${resultado.idade} anos
    `;
}