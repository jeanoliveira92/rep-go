<?php

	foreach ($_POST as $key => $value) {
    echo $key . ' => ' . $value . '<br />';
}


	//var_dump($_POST);

/*
	$myXMLData =
	"<?xml version='1.0' encoding='UTF-8'?>
	<kml xmlns='http://www.opengis.net/kml/2.2' xmlns:gx='http://www.google.com/kml/ext/2.2' xmlns:kml='http://www.opengis.net/kml/2.2' xmlns:atom='http://www.w3.org/2005/Atom'>
		<Document>
			<name>Republicas.kml</name>
			<Placemark>
				<name>jean</name>
				<LookAt>
					<longitude>-45.45913335506376</longitude>
					<latitude>-22.42920333356668</latitude>
					<altitude>0</altitude>
					<heading>-34.6650933897546</heading> // TItulo em graus em relacao ao norte nao precisa
					<tilt>22.07105537443839</tilt> // inclinacao nao precisa
					<range>1000</range> // altura da camera
					<gx:altitudeMode>relativeToSeaFloor</gx:altitudeMode>
				</LookAt>
				<Point>
					<gx:drawOrder>1</gx:drawOrder>
					<coordinates>-45.45913335506376,-22.42920333356668,0</coordinates>
				</Point>
			</Placemark>
		</Document>
	</kml>
	";

	//$xml = simplexml_load_string($myXMLData) or die("Error: Cannot create object");
	//print_r($xml);


	header('Content-Disposition: attachment; filename="Republicas.kml"');
	header('Content-Type: text/plain'); # Don't use application/force-download - it's not a real MIME type, and the Content-Disposition header is sufficient
	header('Content-Length: ' . strlen($myXMLData));
	header('Connection: close');


	echo $myXMLData;*/