document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fazerLogin(username, password);
});

function fazerLogin(username, password) {
    const userData = JSON.parse(localStorage.getItem(username));
    if (userData && userData.password === password) {
        alert('Login bem-sucedido!');
        // Armazenar o nome de usuário no localStorage
        localStorage.setItem('currentUser', username);
        window.location.href = 'forum.html';
    } else {
        alert('Nome de usuário ou senha incorretos!');
    }
}
