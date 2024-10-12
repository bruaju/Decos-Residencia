 // Usuários autorizados!!!
 const usuariosAutorizados = [
    { usuario: 'teste', senha: '123' },
    { usuario: '', senha: '' }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    // Verifica se o usuário existe
    const usuarioValido = usuariosAutorizados.find(u => u.usuario === usuario && u.senha === senha);

    if (usuarioValido) {
        // Redireciona para a página de gestão
        window.location.href = 'gestao.html';
    } else {
        alert('Usuário ou senha incorretos.'); // Mensagem de erro
    }
});