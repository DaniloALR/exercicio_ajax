document.addEventListener('DOMContentLoaded', function() {
    const endpoint = 'https://api.github.com/users/DaniloALR'
    const campo_nome = document.getElementById('nome')
    const campo_login = document.getElementById('login')
    const campo_repositorios = document.getElementById('repositorios')
    const campo_seguidores = document.getElementById('seguidores')
    const campo_seguindo = document.getElementById('seguindo')
    const campo_avatar = document.getElementById('avatar')
    const campo_url = document.getElementById('url')

    fetch(endpoint)
    .then(function(response) {
        return response.json()
    })
    .then(function(json){
        console.log(json)
        const nome = json.name;
        const login = json.login;
        const repositorios = json.public_repos;
        const seguidores = json.followers;
        const seguindo = json.following;
        const avatar = json.avatar_url;
        const url = json.html_url;

        campo_nome.innerText = nome;
        campo_login.innerText = `@${login}`;
        campo_repositorios.innerText = repositorios;
        campo_seguidores.innerText = seguidores;
        campo_seguindo.innerText = seguindo;
        campo_avatar.src = avatar;
        campo_url.href = url;
    })
})
