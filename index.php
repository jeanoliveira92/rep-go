<?php
// ARQUIVO DE COFIGURAÇÃO DO BD
include "conn.inc";
// BUSCANDO AS REPÚBLICAS
$sql = "SELECT * from republica";
$result = $MySQLi->query($sql) or trigger_error($MySQLi->error, E_USER_ERROR);
$array = '[';

while ($row = mysqli_fetch_assoc($result)) {
   $nome = utf8_encode($row['nome']);
   $lat = $row['lat'];
   $lng = $row['lng'];
   $elev = $row['elev'];
   $tipo = utf8_encode($row['tipo']);
   $tipo = str_replace(' ', '', $tipo);
   $membros = $row['num_membros'];

   // $contato = $row['contato'];

   $contato = $pieces = explode(" ", $row['contato']);
   $tels = "";
   foreach ($contato as $arr) {
      $tels .= masc_tel((string) $arr) . " / ";
   }

   $tels = substr_replace($tels, "", -3);

   // $contato = masc_tel("35991127401");

   $endereco = utf8_encode($row['endereco']);
   $face = $row['facebook'];
   $logo = $row['logo'];
   $array .= '{"nome": "' . $nome . '", "lat": "' . $lat . '", "lng": "' . $lng . '", "elev": "' . $elev . '", "tipo": "' . $tipo . '", "membros": "' . $membros . '", "contato": "' . $tels . '", "endereco": "' . $endereco . '", "face": "' . $face . ' ", "logo": "' . $logo . ' "},';
};
$array = substr_replace($array, "]", -1);

// BUSCANDO OS LOCAIS
$sql = "SELECT * from locais order by nome, tipo";
$result = $MySQLi->query($sql) or trigger_error($MySQLi->error, E_USER_ERROR);
$locais = '[';

while ($row = mysqli_fetch_assoc($result)) {
   $nome = utf8_encode($row['nome']);
   $lat = $row['lat'];
   $lng = $row['lng'];
   $elev = $row['elev'];
   $tipo = utf8_encode($row['tipo']);
   $tipo = str_replace(' ', '', $tipo);

   $locais .= '{"nome": "' . $nome . '", "lat": "' . $lat . '", "lng": "' . $lng . '", "elev": "' . $elev . '", "tipo": "' . $tipo . '"},';
};
$locais = substr_replace($locais, "]", -1);

// $locais .= "";
// $locais = json_encode($locais);
// var_dump($locais);
// $filtros =  $locais;
// $columns = get_object_vars($filtros);

?>
<script>
   // PASSANDO AS VARIAVEIS DO PHP PARA JAVASCRIPT
   republicas = (<?php print $array; ?>);
   locais = (<?php print $locais; ?>);

   var startPos;
   var geoOptions = {
      timeout: 10 * 1000,
      enableHighAccuracy: true
   }

   var geoSuccess = function(position) {
      locais.push({
         nome: "Minha Localização",
         lat: position.coords.latitude.toFixed(3),
         lng: position.coords.longitude.toFixed(3),
         elev: 0,
         tipo: "eu"
      });
   };
   var geoError = function(error) {
      switch (error.code) {
         case 0:
            console.log('Error code: unknown error');
            alert("Localização: Erro desconhecido");
            break;
         case 1:
            console.log('Error code: permission denied');
            alert("Localização: Permissão negada");
            break;
         case 2:
            console.log('Error code: position unavailable (error response from location provider)');
            alert("Localização: Posição indisponível");
            break;
         case 3:
            console.log('Error code: timed out');
            alert("Localização: Tempo esgotado");
      }
      console.log('Error code: ' + error.code);
      // error.code can be:
      //   0: unknown error
      //   1: permission denied
      //   2: position unavailable (error response from location provider)
      //   3: timed out
   };

   navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);

   //locais
</script>
<?php
function masc_tel($TEL)
{
   $tam = strlen(preg_replace("/[^0-9]/", "", $TEL));
   if ($tam == 13) { // COM CÓDIGO DE ÁREA NACIONAL E DO PAIS e 9 dígitos
      return "+" . substr($TEL, 0, $tam - 11) . "(" . substr($TEL, $tam - 11, 2) . ")" . substr($TEL, $tam - 9, 5) . "-" . substr($TEL, -4);
   }

   if ($tam == 12) { // COM CÓDIGO DE ÁREA NACIONAL E DO PAIS
      return "+" . substr($TEL, 0, $tam - 10) . "(" . substr($TEL, $tam - 10, 2) . ")" . substr($TEL, $tam - 8, 4) . "-" . substr($TEL, -4);
   }

   if ($tam == 11) { // COM CÓDIGO DE ÁREA NACIONAL e 9 dígitos
      return "(" . substr($TEL, 0, 2) . ")" . substr($TEL, 2, 5) . "-" . substr($TEL, 7, 11);
   }

   if ($tam == 10) { // COM CÓDIGO DE ÁREA NACIONAL
      return "(" . substr($TEL, 0, 2) . ")" . substr($TEL, 2, 4) . "-" . substr($TEL, 6, 10);
   }

   if ($tam <= 9) { // SEM CÓDIGO DE ÁREA
      return substr($TEL, 0, $tam - 4) . "-" . substr($TEL, -4);
   }
}
?>
<!doctype html>
<html lang="pt-BR">

<head>
   <title>REPGO</title>
   <meta charset="utf-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
   <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
   <!-- VENDOR CSS -->
   <link rel="stylesheet" href="assets/vendor/bootstrap/css/bootstrap.min.css">
   <link rel="stylesheet" href="assets/vendor/fontawesome5/css/all.css">
   <link rel="stylesheet" href="assets/vendor/linearicons/style.css">
   <link rel="stylesheet" href="assets/vendor/chartist/css/chartist-custom.css">
   <!-- MAIN CSS -->
   <link rel="stylesheet" href="assets/css/main.css">
   <!-- FOR DEMO PURPOSES ONLY. You should remove this in your project -->
   <link rel="stylesheet" href="assets/css/demo.css">
   <!-- GOOGLE FONTS -->
   <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" rel="stylesheet">
   <!-- ICONS -->
   <link rel="apple-touch-icon" sizes="76x76" href="img/favicon.png  ">
   <link rel="icon" href="img/favicon.png">
   <!-- ANYCHART -->
   <link href="https://cdn.anychart.com/releases/v8/css/anychart-ui.min.css" rel="stylesheet" type="text/css">
   <link href="https://cdn.anychart.com/releases/v8/fonts/css/anychart-font.min.css" rel="stylesheet" type="text/css">
   <script src="https://unpkg.com/feather-icons/dist/feather.min.js"></script>
   <script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/FileSaver.js'></script>
   <script src="js/script.js"></script>
</head>

<body class="layout-fullwidth">
   <!-- WRAPPER -->
   <div id="wrapper">
      <!-- NAVBAR -->
      <nav class="navbar navbar-default navbar-fixed-top ">
         <a class="navbar-brand" href="#"><img src="img/logo.png" height="30px" /></a>
         <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbarText">
               <span class="sr-only">Toggle navigation</span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
            </button>
         </div>
         <!--<div class="navbar-btn">
               <button type="button" class="btn-toggle-fullwidth"><i class="lnr lnr-arrow-left-circle"></i></button>
               </div>-->
         <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarText">
               <ul class="nav navbar-nav">
                  <div class="form-check line">
                     <input class="form-check-input" type="checkbox" id="Masculina" checked>
                     <label class="form-check-label" for="defaultCheck1">
                        <img src='img/masc.png'>
                        Masculina
                     </label>
                  </div>
                  <div class="form-check line">
                     <input class="form-check-input" type="checkbox" id="Feminina" checked>
                     <label class="form-check-label" for="defaultCheck2">
                        <img src='img/femi.png'>
                        Feminina
                     </label>
                  </div>
                  <div class="form-check">
                     <input class="form-check-input" type="checkbox" id="Mista" checked>
                     <label class="form-check-label" for="defaultCheck3">
                        <img src='img/mist.png'>
                        Mista
                     </label>
                  </div>
               </ul>
            </div>
         </div>
      </nav>
      <!-- END NAVBAR -->
      <!-- LEFT SIDEBAR -->
      <div id="sidebar-nav" class="sidebar">
         <div class="sidebar-scroll">
            <nav>
               <ul class="nav side-nav"></ul>
            </nav>
         </div>
      </div>
      <!-- END LEFT SIDEBAR -->
      <!-- MAIN -->
      <div class="main" id="map">
      </div>
   </div>
   <!-- END WRAPPER -->
   <!-- Javascript -->
   <script src="assets/vendor/jquery/jquery.min.js"></script>
   <script src="assets/vendor/bootstrap/js/bootstrap.min.js"></script>
   <script src="assets/vendor/jquery-slimscroll/jquery.slimscroll.min.js"></script>
   <script src="assets/scripts/klorofil-common.js"></script>
   <script src="https://maps.googleapis.com/maps/api/js?key=MEYKEY&callback=init" async defer></script>
   <script type="text/javascript">
      // FAZEM A LIMPEZA E EXIBIÇÃO DOS MARKERS NA TELA
      $("#Masculina").change(function() {
         if ($("#Masculina").is(":checked")) {
            showMarkers("Masculina");
         } else {
            clearMarkers("Masculina");
         }

      });
      $("#Feminina").change(function() {
         if ($("#Feminina").is(":checked")) {
            showMarkers("Feminina");
         } else {
            clearMarkers("Feminina");
         }

      });
      $("#Mista").change(function() {
         if ($("#Mista").is(":checked")) {
            showMarkers("Mista");
         } else {
            clearMarkers("Mista");
         }
      });
   </script>
</body>

</html>