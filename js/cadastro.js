document.getElementById('form-cadastro').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const response = await fetch('/pessoa', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, email, senha })
    });

    const data = await response.json();
    if (response.ok) {
        document.getElementById('mensagem').textContent = `Pessoa cadastrada com sucesso: ${data.nome} (${data.email})`;
    } else {
        document.getElementById('mensagem').textContent = `Erro ao cadastrar pessoa: ${data.erro}`;
    }
});
