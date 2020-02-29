// ICONES
feather.replace();

// GOOGLE MAPS
// VARIAVEIS GLOBAIS
// JSON Republicas
var republicas;
// JSON Locais
var locais;
// Vaveis e Objetos MAP
var MAP;
var directionsDisplay;
var directionsService;
// ZOOM Inicial do mapa
var ZOOMLEVEL = 14;
// Posição inicial da tela no mapa
var CENTERPOS = {
    lat: -22.420,
    lng: -45.455
};
// MARKERs das republicas no Mapa
var markers = [];

// Lista de MARKERs Classificado pelo tipo da república                                        
var MARK = {
    "Feminina": "img/femi.png",
    "Masculina": "img/masc.png",
    "Mista": "img/mist.png",
    "-": "img/masc.png",
    " ": "img/masc.png"
};

/// ADICIONANDO OS MARKERS NO MAPA E ADICIONANDO OS LISTENERS A ELES
function init() {
    // INICIA O MAPA NO CENTRO DE ITAJUBÁ
    MAP = new google.maps.Map(document.getElementById("map"), {
        center: CENTERPOS,
        zoom: ZOOMLEVEL,
    });

    //Instanciando...
    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(MAP);
    directionsService = new google.maps.DirectionsService();

    // LOOP PARA ADICIONAR OS PONTOS NO MAPA
    for (i in republicas) {
        // ADICIONA APENAS OS PONTOS ONDE O CHECK BOC CORRESPONDENTE ESTEJA SELECIONADO
        if ($(("#" + republicas[i].tipo.trim())).attr("checked")) {
            // ICONE CORRESPONDENTE AO TIPO DA REPÚBLICA
            var img = MARK[republicas[i].tipo.trim()];
            // CONSTRUTOR DO MARKER - ADICIONANDO O MARKER NO MAPAA
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(republicas[i].lat, republicas[i].lng),
                title: republicas[i].nome,
                map: MAP,
                icon: img,
            });
            // ADICIONA O MARKER AO VETOR DE MARKERS
            markers.push(marker);
            // LISTENER DO MARKER PARA ABRIR O PAINEL LATERAL COM AS INFORMAÇÕES
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    // FUNÇÃO PARA ABRIR O MENU LATERAL
                    openLeftMenu(republicas[i].nome, republicas[i].tipo, republicas[i].membros, republicas[i].contato, republicas[i].endereco, republicas[i].face, republicas[i].logo, i);
                    // REALIZAR O ZOOM NO MARKER DA REPUBLICA
                    MAP.setZoom(16);
                    MAP.panTo(new google.maps.LatLng(republicas[i].lat, republicas[i].lng));
                }
            })(marker, i));
        }
    }
};

// FUNÇÃO PARA ABRIR O MENU LATERAL DE INFORMAÇÕES
function openLeftMenu(nome, tipo, membros, contato, endereco, facebook, logo, i) {
    // RESETA QUALQUER ROTA TRAÇADA ANTERIORMENTE
    directionsDisplay.setMap(null);
    // INSTANCIA UMA LOGO DEFAULT QUANDO NÃO HOUVER LOGO DA REPÚBLICA
    if (logo == " ") {
        logo = "semimagem.jpg";
    };
    // SE NÃO POSSUIR UM NUMERO DE CONTATO, EXIBE QUE NÃO POSSUI
    if (contato == null || contato == " " || contato == "-") {
        contato = "Não possui";
    };
    // ADICIONA OS DADOS E LOGO DA REPÚBLICA
    $(".side-nav").empty().append("<li class='nav-item nopadding'><div class='navbar-btn'><button type='button' class='fecharDetalhes'><i class='far fa-times-circle'></i></button></div><img src='img/reps/" + logo + "'></li><li class='line'></li><li class='nav-item titulo'> República: " + nome + " </li><li class='line'></li><li class='nav-item'> <a class='nav-link' href='#' title='Cart'> <i class='fas fa-venus-mars'></i>Tipo: " + tipo + "</a> </li> <li class='nav-item'> <a class='nav-link' href='#' title='Cart'><i class='fas fa-map-marker-alt'></i>Endereço: " + endereco + "</a> </li> <li class='nav-item'> <a class='nav-link' href='#' title='Cart'> <i class='fas fa-phone-square'></i></i>Contato: " + contato + "</a> </li> <li class='nav-item'> <a class='nav-link' " + ((facebook === "Não possui") ? "" : "href='http://fb.com/" + facebook) + "' target='_blank' title='Cart'><i class='fab fa-facebook-f'></i>Facebook: " + facebook + " </a> </li> <li class='nav-item'> <a class='nav-link' href='#' title='Cart'><i class='fas fa-users'></i>Membros: " + membros + "</a> </li>");
    // CALCULA A DISTANCIA ENTRE A REPÚBLICA E OS LOCAIS
    distanciaEntre(i);
    // ABRE O MENU LATERAL
    abreMenu();
    // BOTÃO PARA FECHAR O MENU LATERAL
    $('.fecharDetalhes').on('click', function () {
        fechaMenu();
    });
};
// FUNÇÃO PARA ABRIR O MENU LATERAL
function abreMenu() {
    $('body').removeClass('layout-fullwidth');
    $('body').removeClass('layout-default'); // also remove default behaviour if set
    $(this).find('.lnr').toggleClass('lnr-arrow-left-circle lnr-arrow-right-circle');
}
// FUNÇÃO PARA FECHAR O MENU LATERAL
function fechaMenu() {
    $('body').addClass('layout-fullwidth');
}

// Distancia Entre locais Google Maps
function distanciaEntre(X) {
    // ADICIONANDO OS MENUS
    $(".side-nav").append("<li class='line'></li><li class='titulo'>Distância dos principais locais</li><li class='line'></li>");
    $(".side-nav").append("<li><a href='#eu' data-toggle='collapse' aria-expanded='false' class='collapsed'><i class='fas fa-map-marked'></i><span>A partir da sua localização</span> <i class='icon-submenu lnr lnr-chevron-left'></i></a><div id='eu' class='collapse' aria-expanded='false' style='height: 0px;''><ul class='nav'></ul></div></li><li class='line'></li><li><a href='#hospital' data-toggle='collapse' aria-expanded='false' class='collapsed'><i class='fas fa-hospital'></i><span>Hospitais</span> <i class='icon-submenu lnr lnr-chevron-left'></i></a><div id='hospital' class='collapse' aria-expanded='false' style='height: 0px;''><ul class='nav'></ul></div></li><li class='line'></li><li><a href='#farmacia' data-toggle='collapse' aria-expanded='false' class='collapsed'><i class='fas fa-prescription-bottle-alt'></i><span>Farmacias</span> <i class='icon-submenu lnr lnr-chevron-left'></i></a><div id='farmacia' class='collapse' aria-expanded='false' style='height: 0px;''><ul class='nav'></ul></div></li><li class='line'></li><li><a href='#centro' data-toggle='collapse' aria-expanded='false' class='collapsed'><i class='fas fa-city'></i><span>Centro</span><i class='icon-submenu lnr lnr-chevron-left'></i></a><div id='centro' class='collapse' aria-expanded='false' style='height: 0px;''><ul class='nav'></ul></div></li><li class='line'></li><li><a href='#mercado' data-toggle='collapse' aria-expanded='false' class='collapsed'><i class='fas fa-store'></i><span>Supermercados</span> <i class='icon-submenu lnr lnr-chevron-left'></i></a><div id='mercado' class='collapse' aria-expanded='false' style='height: 0px;''><ul class='nav'></ul></div></li><li class='line'></li><li><a href='#rodoviaria' data-toggle='collapse' aria-expanded='false' class='collapsed'><i class='fas fa-city'></i><span>Rodoviária</span> <i class='icon-submenu lnr lnr-chevron-left'></i></a><div id='rodoviaria' class='collapse' aria-expanded='false' style='height: 0px;''><ul class='nav'></ul></div></li><li class='line'></li><li><a href='#autoescola' data-toggle='collapse' aria-expanded='false' class='collapsed'><i class='fas fa-address-card'></i><span>Autoescola</span> <i class='icon-submenu lnr lnr-chevron-left'></i></a><div id='autoescola' class='collapse' aria-expanded='false' style='height: 0px;''><ul class='nav'></ul></div></li><li class='line'></li><li><a href='#banco' data-toggle='collapse' aria-expanded='false' class='collapsed'><i class='fas fa-money-check-alt'></i><span>Banco</span> <i class='icon-submenu lnr lnr-chevron-left'></i></a><div id='banco' class='collapse' aria-expanded='false' style='height: 0px;''><ul class='nav'></ul></div></li><li class='line'></li><li><a href='#bar' data-toggle='collapse' aria-expanded='false' class='collapsed'><i class='fab fa-untappd'></i><span>Bar</span> <i class='icon-submenu lnr lnr-chevron-left'></i></a><div id='bar' class='collapse' aria-expanded='false' style='height: 0px;''><ul class='nav'></ul></div></li><li class='line'></li><li><a href='#biblioteca' data-toggle='collapse' aria-expanded='false' class='collapsed'><i class='fas fa-book-reader'></i><span>Biblioteca</span> <i class='icon-submenu lnr lnr-chevron-left'></i></a><div id='biblioteca' class='collapse' aria-expanded='false' style='height: 0px;''><ul class='nav'></ul></div></li><li class='line'></li><li><a href='#comida' data-toggle='collapse' aria-expanded='false' class='collapsed'><i class='fas fa-utensils'></i><span>Restaurantes</span> <i class='icon-submenu lnr lnr-chevron-left'></i></a><div id='comida' class='collapse' aria-expanded='false' style='height: 0px;''><ul class='nav'></ul></div></li><li class='line'></li><li><a href='#cultura' data-toggle='collapse' aria-expanded='false' class='collapsed'><i class='fas fa-ticket-alt'></i><span>Cultura/Lazer</span> <i class='icon-submenu lnr lnr-chevron-left'></i></a><div id='cultura' class='collapse' aria-expanded='false' style='height: 0px;''><ul class='nav'></ul></div></li><li class='line'></li><li><a href='#posto' data-toggle='collapse' aria-expanded='false' class='collapsed'><i class='fas fa-gas-pump'></i><span>Posto/Lazer</span> <i class='icon-submenu lnr lnr-chevron-left'></i></a><div id='posto' class='collapse' aria-expanded='false' style='height: 0px;''><ul class='nav'></ul></div></li><li class='line'></li><li><a href='#universidade' data-toggle='collapse' aria-expanded='false' class='collapsed'><i class='fas fa-university'></i><span>Universidade/Lazer</span> <i class='icon-submenu lnr lnr-chevron-left'></i></a><div id='universidade' class='collapse' aria-expanded='false' style='height: 0px;''><ul class='nav'></ul></div></li><li class='line'></li>");

    // SETA A ORIGEM DA DISTANCIA COM A LOCALIZAÇÃO DA REPÚBLICA
    var origin = new google.maps.LatLng(republicas[X].lat, republicas[X].lng);
    // LAÇO PARA CALCULAR A DISTANCIA ENTRE TODOS OS LOCAIS
    for (k = 0; k < locais.length; k++) {
        // FUNÇÃO QUE CALCULA O TEMPO E O LISTENER PARA A ROTA
        calcularTempo(k, origin, new google.maps.LatLng(locais[k].lat, locais[k].lng));
    };
    // ADICIONA O BOTÃO PARA O DOWNLOAD DAS INFORMAÇÕES DAS REPUBLICAS EM KML
    $(".side-nav").append("<li class='titulo'>Download GeoData das Repúblicas</li><li class='line'></li>");
    $(".side-nav").append("<li class='nav-item' id='downloadKml'><a class=''> <i class='fas fa-cloud-download-alt'></i> DOWNLOAD KML </a>");

    // LISTENER PARA O DOWNLOAD DO KML DAS REPUBLICAS
    $("#downloadKml").on("click", function () {
        KmlExport();
    });
};

// CALCULA O TEMPO ENTRE A REPUBLICA E O LOCAL
function calcularTempo(k, origin, destin) {
    // INTANCIA OS SERVIÇOS DO GOOGLE
    var service = new google.maps.DistanceMatrixService();
    // VARIAVEL DESTINO CORRESPONDENTE A POSIÇÃO NO VETOR DE LOCAIS
    var destin = new google.maps.LatLng(locais[k].lat, locais[k].lng);
    // FUNÇÃO PARA REALIZAR O CALCULO DA DISTANCIA
    service.getDistanceMatrix({
        origins: [origin],
        destinations: [destin],
        travelMode: 'WALKING'
    }, callback);
    // FUNÇÃO DE RESPOSTA A CHAMADA DE FUNCAO A ACIMA, ONDE ADICIONA O PONTO, TEMPO E LISTENER PARA ROTA
    function callback(response, status) {
        if (status == 'OK') {
            var origins = response.originAddresses;
            var destinations = response.destinationAddresses;
            // VETOR RESPOSTA COM AS INFORMAÇÕES
            var results = response.rows[0].elements;
            var element = results[0];
            // ADICIONA O LOCAL, A DISTANCIA E O TEMPO
            $("#" + locais[k].tipo + " ul").append("<li class='nav-item' id='" + k + "'> <a class='' ><i class='fas fa-bars'></i>" + locais[k].nome + "<br>Fica a " + element.distance.text + " ( " + element.duration.text + " andando)</a>");
            // LISTENER QUE FAZ O CHAMADO PARA TRAÇAR A ROTA NA TELA.
            $(("#" + k)).on("click", function () {
                tracarRota(origins[0], destinations[0]);
                // FECHA O MENU EM CASO DE NAVEGADORES MOBILE
                if ($(window).width() < 1024) {
                    fechaMenu();
                }
            });
        };
    };
};

// FUNÇÃO PARA TRAÇAR A ROTA NA TELA
function tracarRota(origins, destination) {

    event.preventDefault();
    //DIZ EM QUAL MAPA A ROTA SERÁ REALIZADA
    directionsDisplay.setMap(MAP);
    // VARIAVEL QUE CONTEM AS INFORMAÇÕES DE ROTA A SER TRAÇADA
    var request = { // Novo objeto google.maps.DirectionsRequest, contendo:
        origin: origins, // origem
        destination: destination, // destino
        travelMode: google.maps.TravelMode.WALKING // meio de transporte, nesse caso, de carro
    };
    // REQUISITANDO A ROTA AO GOOGLE
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) { // Se deu tudo certo
            directionsDisplay.setDirections(result); // Renderizamos no mapa o resultado
        }
    });
    // DEPOIS QUE A ROTA É TRAÇADA, É REALIZADO UM ZOOM NO MAPA DEPOIS DE 100MS
    setTimeout(function () {
        MAP.setZoom(15);
    }, 100);
};

// FUNÇÃO QUE ADQUIRE AS INFORMAÇÕES DAS REPUBLICAS E AS CONVERTE PARA KKML
function KmlExport() {
    var KML = "<?xml version='1.0' encoding='UTF-8'?>\n" +
        "<kml xmlns='http://www.opengis.net/kml/2.2' xmlns:gx='http://www.google.com/kml/ext/2.2' xmlns:kml='http://www.opengis.net/kml/2.2' xmlns:atom='http://www.w3.org/2005/Atom'>\n" +
        "<Document>\n" +
        "<name>Republicas.kml</name>\n";


    for (i in republicas) {
        KML += "<Placemark>\n" +
            "<name>" + republicas[i].nome + "</name>\n" +
            "<address>" + republicas[i].endereco + "</address>\n" +
            "<snippet>" + republicas[i].tipo + "</snippet>\n" +
            "<description>" + republicas[i].endereco + "</description>\n" +
            "<LookAt>\n" +
            "<longitude>" + republicas[i].lng + "</longitude>\n" +
            "<latitude>" + republicas[i].lat + "</latitude>\n" +
            "<altitude>" + republicas[i].elev + "</altitude>\n" +
            "<range>1000</range>\n" +
            "<gx:altitudeMode>relativeToSeaFloor</gx:altitudeMode>\n" +
            "</LookAt>\n" +
            "<Point>\n" +
            "<gx:drawOrder>" + i + "</gx:drawOrder>\n" +
            "<coordinates>" + republicas[i].lng + "," + republicas[i].lat + "," + republicas[i].elev + "</coordinates>\n" +
            "</Point>\n" +
            "</Placemark>";
    }

    KML += "</Document>\n" +
        "</kml>";

    var blob = new Blob([KML], {
        type: "text/plain;charset=utf-8"
    });
    saveAs(blob, "Republicas.kml");
};

// QUANDO O USUARIO APERTAR O BOTÃO ESC, FECHA-SE O MENU LATERAL
window.addEventListener('keydown', function (e) {
    if (e.keyCode === 27) {
        fechaMenu();
        MAP.setZoom(ZOOMLEVEL);
    }

    if (!$('body').hasClass('layout-fullwidth')) {
        $(".close").on("click", function () {
            fechaMenu();
            MAP.setZoom(ZOOMLEVEL);
        });
    };

}, true);

//// ~FUNÇÕES DE MANIPULAÇÃO DOS MARKERS
// Sets the map on all markers in the array.
function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers(tipo) {
    for (var i = 0; i < markers.length; i++) {
        if (republicas[i].tipo == tipo) {
            markers[i].setMap(null);
        }
    }
}

// Shows any markers currently in the array.
function showMarkers(tipo) {
    for (var i = 0; i < markers.length; i++) {
        if (republicas[i].tipo == tipo) {
            markers[i].setMap(MAP);
        }
    }
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    clearMarkers();
    markers = [];
}