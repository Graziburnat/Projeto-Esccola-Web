const main = document.querySelector('main');

//requisição principal

function loadHome() {
    fetch('html/home.html')
        .then((res) => {
            return res.text();
        })
        .then((html) => {
            main.innerHTML = html;
        });
}

loadHome();

function loadHTML(url) {
    fetch(url)
        .then((res) => {
            return res.text();
        })
        .then((html) => {
            main.innerHTML = html;
        }).then(() => {
            loadAfter()
        });
}

//requisição menus
const mnHome = document.querySelector('#menuHome');
mnHome.onclick = function () {
    loadHTML('html/home.html')
}
const mnLogin = document.querySelector('#menuLogin');
mnLogin.onclick = function () {
    loadHTML('html/login.html')
}
const mnMatr = document.querySelector('#menuMatricula');
mnMatr.onclick = function () {
    loadHTML('html/matricula.html')
}

function loadAfter() {

    const btnAgenda = document.getElementById('btnAgenda')
    if (btnAgenda != null) {
        btnAgenda.onclick = function () {
            loadHTML('html/aluno/agenda.html')

            var requestURL = 'http://localhost:3000/escola';
            var request = new XMLHttpRequest();

            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
            request.onload = function () {
                var agenda = request.response;
                mostrarPrincipal(agenda);
                mostrarExtras(agenda);
            }

            function mostrarPrincipal(jsonObj) {
                var contador = jsonObj[0]['agendaPrincipal'];
                for (var i = 0; i < contador.length; i++) {
                    var sectionPrincipal = document.getElementById('principal');
                    var myArticle = document.createElement('article');
                    var myH2 = document.createElement('h3');
                    var myPara2 = document.createElement('p');
                    var myPara3 = document.createElement('p');
                    myH2.textContent = contador[i].materia;
                    myPara2.textContent = 'Atividade: ' + contador[i].atividade;
                    myPara3.textContent = 'Data:' + contador[i].data;

                    myArticle.appendChild(myH2);
                    myArticle.appendChild(myPara2);
                    myArticle.appendChild(myPara3);
                    console.log(sectionPrincipal);
                    sectionPrincipal.appendChild(myArticle);
                }

            }

            function mostrarExtras(jsonObj) {
                var contador1 = jsonObj[1]['agendaExtras'];
                for (var i = 0; i < contador1.length; i++) {
                    var sectionExtras = document.getElementById('extras');
                    var myArticle = document.createElement('article');
                    var myH2 = document.createElement('h3');
                    var myPara2 = document.createElement('p');
                    var myPara3 = document.createElement('p');
                    myH2.textContent = contador1[i].materia;
                    myPara2.textContent = 'Atividade: ' + contador1[i].atividade;
                    myPara3.textContent = 'Data:' + contador1[i].data;

                    myArticle.appendChild(myH2);
                    myArticle.appendChild(myPara2);
                    myArticle.appendChild(myPara3);
                    sectionExtras.appendChild(myArticle);
                }

            }
        }
    }

    const btnChat = document.getElementById('btnChat')
    if (btnChat != null) {
        btnChat.onclick = function () {
            loadHTML('html/aluno/chat.html')
        }
    }

    const btnAe = document.getElementById('btnAe')
    if (btnAe != null) {
        btnAe.onclick = function () {
            loadHTML('html/aluno/ae.html')

            var requestURL = 'http://localhost:3000/escola';
            var request = new XMLHttpRequest();

            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
            request.onload = function () {
                var agenda = request.response;
                listarArtes(agenda);
                listarEsportes(agenda);
            }

            function listarArtes(jsonObj) {

                var sectionArtes = document.getElementById('aeArtes');
                var contador = jsonObj[2]['artes'];
                for (var i = 0; i < contador.length; i++) {
                    var myArticle = document.createElement('article');
                    var box = document.createElement("INPUT");
                    box.setAttribute("type", "checkbox");
                    var myH2 = document.createElement('h3');
                    var myPara2 = document.createElement('p');
                    myH2.textContent = contador[i].nome + ":";
                    myPara2.textContent = contador[i].desc + ":";

                    myArticle.appendChild(box);
                    myArticle.appendChild(myH2);
                    myArticle.appendChild(myPara2);
                    sectionArtes.appendChild(myArticle);
                }

            }

            function listarEsportes(jsonObj) {

                var sectionEsportes = document.getElementById('aeEsportes');
                var contador1 = jsonObj[3]['esportes'];
                for (var i = 0; i < contador1.length; i++) {
                    var myArticle = document.createElement('article');
                    var box = document.createElement("INPUT");
                    box.setAttribute("type", "checkbox");
                    var myH2 = document.createElement('h3');
                    var myPara2 = document.createElement('p');
                    myH2.textContent = contador1[i].nome + ":";
                    myPara2.textContent = contador1[i].desc + ":";

                    myArticle.appendChild(box);
                    myArticle.appendChild(myH2);
                    myArticle.appendChild(myPara2);
                    sectionEsportes.appendChild(myArticle);
                }

            }
        }
    }

    const btnLogin = document.getElementById('btnLog1')
    if (btnLogin != null) {
        btnLogin.onclick = function () {
            let user = document.getElementById('user').value
            let password = document.getElementById('password').value

            if (user == 'aluno' && password == 'aluno') {
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
            else {
                window.alert('Usuário não encontrado. Verifique o login e senha.')
            }
        }
    }
}