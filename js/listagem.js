async function listarPessoas() {
    const response = await fetch('/pessoa');
    const pessoas = await response.json();

    const tbody = document.querySelector('#tabela-pessoas tbody');
    tbody.innerHTML = '';

    pessoas.forEach(pessoa => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${pessoa.id}</td>
            <td>${pessoa.nome}</td>
            <td>${pessoa.email}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Atualiza a lista de pessoas assim que a página é carregada
listarPessoas();
