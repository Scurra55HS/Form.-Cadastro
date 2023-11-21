function validaFormulario() {

    const nome = document.getElementById("nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.getElementById("senha").value;
    const confiSenha = document.getElementById("confiSenha").value;

    //Validação de campos vazios    
    
    if (nome == '' || email == '' || senha == '' || confiSenha == '') {
        alert("Por favor, preencha os campos vazios!");
        return
    }

    //Validação do campo do email

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        alert("Digite um e-mail válido")
        return
    }


    //Validação do tamanho da senha

    if (senha.length < 8) {
        alert("Minimo de 8 caracteres!");
        return
    }

    //Confirmação de senha

    if (senha !== confiSenha || confiSenha !== senha) {
        alert("As senhas devem ser idênticas!")
        return
    }
    
    alert ("Cadastro concluido com sucesso!")
    
}

function darkMode() {
    const pagina = document.body

    pagina.classList.toggle("dark-mode")
    
    const botao = document.getElementById("bdark")

    const isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode == true) {
        botao.textContent = "Modo Claro"
    } else {
        botao.textContent = "Modo Escuro"
    }
}