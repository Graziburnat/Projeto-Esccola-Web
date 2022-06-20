const main = document.querySelector('main');

//requisição principal

function loadHome(){
    fetch('html/home.html')
    .then((res) => {       
        return res.text();
    })
    .then((html) => {
        main.innerHTML = html;
    });
}

loadHome(); 

function loadHTML(url){
    fetch(url)
    .then((res) => {       
        return res.text();
    })
    .then((html) => {
        main.innerHTML = html;
    }).then(()=>{
        loadAfter()
    });
}

//requisição menus
const mnHome = document.querySelector('#menuHome');
mnHome.onclick = function(){
    loadHTML('html/home.html')
}
const mnLogin = document.querySelector('#menuLogin');
mnLogin.onclick = function(){
    loadHTML('html/login.html')
}
const mnMatr = document.querySelector('#menuMatricula');
mnMatr.onclick = function(){
    loadHTML('html/aluno/matricula.html')
}

function loadAfter(){

    const btnAgenda = document.getElementById('btnAgenda')
    if(btnAgenda != null){
        btnAgenda.onclick = function(){
            loadHTML('html/aluno/agenda.html')
        }
    }

    const btnChat = document.getElementById('btnChat')
    if(btnChat != null){
        btnChat.onclick = function(){
            loadHTML('html/aluno/chat.html')
        }
    }

    const btnAe = document.getElementById('btnAe')
    if(btnAe != null){
        btnAe.onclick = function(){
            loadHTML('html/aluno/ae.html')
        }
    }

    const btnLogin = document.getElementById('btnLog1')
    if (btnLogin != null) {
        btnLogin.onclick = function() {
            let user = document.getElementById('user').value
            let password = document.getElementById('password').value
        
            if(user == 'aluno' && password == 'aluno'){
                loadHTML('html/aluno/areaAluno.html')
            }
            else if (user == 'pai' && password == 'pai') {
                loadHTML('html/pais/areaResponsaveis.html')
            }
            else if (user == 'admin' && password == 'admin') {
                loadHTML('html/adm/home.html')
            }
            else if (user == 'prof' && password == 'prof') {
                loadHTML('html/professores/areaprof.html')
            }
            else{
                window.alert('Usuário não encontrado. Verifique o login e senha.')
            }
        }
    }       
}