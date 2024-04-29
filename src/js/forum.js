document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const postContent = document.getElementById('postContent').value.trim();
    const currentUser = localStorage.getItem('currentUser');

    if (!currentUser) {
        alert('Faça login para postar no fórum!');
        return;
    }

    if (postContent === '') {
        // Se o conteúdo estiver vazio, sair da função sem fazer nada
        return;
    }

    const postElement = document.createElement('div');
    postElement.className = 'post';

    const postContentElement = document.createElement('p');
    postContentElement.textContent = postContent;

    const usernameElement = document.createElement('span');
    usernameElement.textContent = currentUser + ': ';

    postElement.appendChild(usernameElement);
    postElement.appendChild(postContentElement);

    const postContainer = document.getElementById('postContainer');

    // Adicionar o novo post ao container
    postContainer.appendChild(postElement);

    // Limpar o campo de texto do formulário após a postagem
    document.getElementById('postContent').value = '';
});
