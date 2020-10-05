


let btn = document.querySelector('#btn')
let div = document.querySelector('#app')

btn.onclick = function(){
    div.innerHTML = '';

    let spanNome = document.createElement('span');

    let txtNome = '';

    let github_user = document.querySelector('input[name=github_user]').value;

    axios.get(`https://api.github.com/users/${github_user}`)
        .then(function(response){
            if(response.data.name !== null){
                txtNome = document.createTextNode(response.data.name);
                let img = document.createElement('img');
                img.setAttribute('src', response.data.avatar_url);
                img.setAttribute('alt', response.data.name);
                img.setAttribute('widht', '45px');
                img.setAttribute('height', '45px');

                div.appendChild(img);
            }else{
                txtNome = document.createTextNode('Usuário não possui nome.');
            }
            spanNome.appendChild(txtNome);
            div.appendChild(span);
        })
        .catch(function(error){
            txtNome = document.createTextNode('Não foi possível realizar a requisição.');
            spanNome.appendChild(txtNome);
            div.appendChild(span);
        });

        

}