document.getElementById("retornarBotao").onclick = function () {
    location.href = "index.html";
};
function registerUser() {
    var nomeInput = document.getElementById('nome');
    var emailInput = document.getElementById('email');
    var senhaInput = document.getElementById('senha');
    var alertMessage = document.getElementById('alertMessage');

    if (nomeInput.value.trim() === '' || emailInput.value.trim() === '' || senhaInput.value.trim() === '') {
        alertMessage.textContent = 'Por favor, preencha todos os campos.';
        alertMessage.style.opacity = '1';
        return;
    }

    function isValidName(value) {
        return /^[a-zA-Z]+$/.test(value);
    }

    function isValidEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    function isValidPassword(value) {
        return value.length >= 8;
    }

    if (!isValidName(nomeInput.value.trim())) {
        alertMessage.textContent = 'Por favor, insira um nome válido (apenas letras).';
        alertMessage.style.opacity = '1';
        return;
    }

    if (!isValidEmail(emailInput.value.trim())) {
        alertMessage.textContent = 'Por favor, insira um email válido no formato "nome@gmail.com".';
        alertMessage.style.opacity = '1';
        return;
    }

    if (!isValidPassword(senhaInput.value)) {
        alertMessage.textContent = 'A senha deve ter pelo menos 8 caracteres.';
        alertMessage.style.opacity = '1';
        return;
    }

    alertMessage.textContent = 'Usuário registrado com sucesso!';
    alertMessage.style.opacity = '1';

    var opacity = 1;
    var interval = setInterval(function () {
        opacity -= 0.1;
        alertMessage.style.opacity = opacity;
    }, 500);
}