document.getElementById("formulario-tarefa").addEventListener("submit", function(event) {
    event.preventDefault(); /*Evita o recarregamento da página*/

    /*Obtém os valores dos campos A e B*/
    const campoA = parseFloat(document.getElementById("campo-a").value);
    const campoB = parseFloat(document.getElementById("campo-b").value);
    const mensagemSucesso = document.querySelector(".mensagem-sucesso");

    /*Limpa a mensagem anterior e ajusta a visibilidade*/
    mensagemSucesso.style.display = "block"; /*Garante que a mensagem estará visível*/
    mensagemSucesso.textContent = "";

    /*Verifica se o número B é maior que o número A*/
    if (campoB <= campoA) {
        mensagemSucesso.textContent = "ATENÇÃO! O valor do CAMPO B deve ser MAIOR que o valor do CAMPO A!";
        mensagemSucesso.style.color = "red";
        mensagemSucesso.style.backgroundColor = "transparent";
    } else {
        mensagemSucesso.textContent = "Formulário submetido com sucesso!";
        mensagemSucesso.style.color = "#fff";
        mensagemSucesso.style.backgroundColor = "#27ae60";
    }
});
