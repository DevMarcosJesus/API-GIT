


let btn = document.querySelector('#btn')
let div = document.querySelector('#app')

let promise = function(){
    return new Promise(function(resolve, reject){

        let github_user = document.querySelector('input[name=github_user]').value;

        let ajax = new XMLHttpRequest();

        ajax.open('GET', `https://api.github.com/users/${github_user}`);

        ajax.send(null);

        ajax.onreadystatechange = function(){
            if(ajax.readyState === 4){
                if(ajax.status === 200){

                    resolve(JSON.parse(ajax.responseText));

                }else{
                    reject('Não foi encontrado nem um usuário com este nome, porém a conta sim.');
                }
            }
        }
    });
}

btn.onclick = function(){
    
    div.innerHTML = '';

    let para = document.createElement('p')
    let spanNome = document.createElement('Span');
    let txtNome = '';

    promise()

        .then(function(response){

            if(response['login'] !== null){

                txtNome = document.createTextNode(response['login']);

                let img = document.createElement('img');

                img.setAttribute('src', response['avatar_url']);

                img.setAttribute('alt', response['name']);

                img.setAttribute('width','270px');
                img.setAttribute('height', '270px');

                div.appendChild(img);

            }else{
                txtNome = document.createTextNode('O usuário encontrado não possui nome.');
            }
                para.appendChild(txtNome);

                div.appendChild(para);

                // spanNome.appendChild(txtNome);

                // div.appendChild(spanNome);
        })
        .catch(function(error){
            txtNome = document.createTextNode(error);

            para.appendChild(txtNome);

            div.appendChild(para);

            // spanNome.appendChild(txtNome);

            // div.appendChild(spanNome);
        });


}