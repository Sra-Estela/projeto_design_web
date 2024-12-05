// const menu = document.getElementById('menu');
// const logo = document.querySelector('.logo'); // Seleciona o logo
// const pesquisa = document.querySelector('.pesquisa'); // Seleciona o botão de pesquisa

// // Função para mover o logo para o menu fixo
// function handleScroll() {
//     if (window.scrollY > 0) {
//         // Adiciona a classe 'fixed' e move o logo para dentro do menu
//         if (!menu.contains(logo)) {
//             menu.appendChild(logo); // Move a logo para dentro do menu
//         }
//         menu.classList.add('fixed');  // Torna o menu fixo
//     } 
//     else {
//         // Remove a classe 'fixed' e move o logo de volta para o cabeçalho
//         if (document.querySelector('.cabecalho').contains(logo)) {
//             document.querySelector('.logomarca').appendChild(logo); // Move o logo de volta ao cabeçalho
//         }
//         menu.classList.remove('fixed');  // Remove a classe 'fixed' quando o menu não for fixo
//     }
// }

// // Adiciona o evento de scroll para ativar a função
// window.addEventListener('scroll', handleScroll);
