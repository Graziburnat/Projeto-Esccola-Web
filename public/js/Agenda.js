var sectionPrincipal = document.getElementById('principal');
var sectionExtras = document.getElementById('extras');
var requestURL = '/public/data/db.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var agenda = request.response;
    mostrarPrincipal(agenda);
    mostrarExtras(agenda);
}

function mostrarPrincipal(jsonObj){
    var contador = jsonObj[0]['agendaPrincipal'];
    for(var i = 0; i < contador.length; i++){
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h3');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        myH2.textContent = contador[i].materia;
        myPara2.textContent = 'Atividade: ' + contador[i].atividade;
        myPara3.textContent = 'Data:'+ contador[i].data;

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        sectionPrincipal.appendChild(myArticle);
    }

}

function mostrarExtras(jsonObj){
    var contador1 = jsonObj[1]['agendaExtras'];
    for(var i = 0; i < contador1.length; i++){
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h3');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        myH2.textContent = contador1[i].materia;
        myPara2.textContent = 'Atividade: ' + contador1[i].atividade;
        myPara3.textContent = 'Data:'+ contador1[i].data;

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        sectionExtras.appendChild(myArticle);
    }

}



