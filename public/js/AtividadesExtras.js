var sectionArtes = document.getElementById('aeArtes');
var sectionEsportes = document.getElementById('aeEsportes');
var requestURL = '/public/data/ae.json';
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

    var contador = jsonObj[0]['artes'];
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

    var contador1 = jsonObj[1]['esportes'];
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


    // var contador2 = jsonObj[0]['atividadesExtras'];
    // for(var i = 0; i < contador2.length; i++){

    //     var contador3 = contador2[i].artes;
    //     for (var j = 0; j < contador3.length; j++) {
    //         var myArticle = document.createElement('article');
    //         var myH2 = document.createElement('h3');
    //         var myPara2 = document.createElement('p');
    //         myH2.textContent = contador3[i].nome;
    //         myPara2.textContent = contador3[i].desc;

    //         myArticle.appendChild(myH2);
    //         myArticle.appendChild(myPara2);
    //         sectionArtes.appendChild(myArticle);
    //     }

    //     var contador4 = contador2[i].esportes;
    //     for (var j = 0; j < contador4.length; j++) {
    //         var myArticle = document.createElement('article');
    //         var myH2 = document.createElement('label');
    //         var myPara2 = document.createElement('p');
    //         myH2.textContent = contador4[i].nome;
    //         myPara2.textContent = contador4[i].desc;

    //         myArticle.appendChild(myH2);
    //         myArticle.appendChild(myPara2);
    //         sectionEsportes.appendChild(myArticle);
    //     }

    // }