// Obter a URL atual
const currentPath = window.location.pathname.split('/').pop(); // Nome do arquivo (ex: 'index.html')

// Selecionar todos os links do menu
const menuLinks = document.querySelectorAll('.opcoes .opcao');

// Iterar pelos links e adicionar a classe 'active' ao link correspondente
menuLinks.forEach(link => {
    const linkPath = link.getAttribute('href'); // Caminho do link
    if (linkPath === currentPath) {
        link.classList.add('active');
    }
});