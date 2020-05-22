<?php
  // Send data to the client.
  header('Content-Type: text/plain; charset=utf-8');
  header('Cache-control: no-store, no-cache, must-revalidate');
  header('Pragma: no-cache');
  header('HTTP/1.1 200 OK');

$date=getdate();

$displayDate='Il est : '.$date['hours'].':'. $date['minutes'].':'.$date['seconds'];
$array = array( $displayDate, array( "hours" => $date["hours"], "minutes" => $date["minutes"], "seconds" => $date["seconds"]));

$json=json_encode($array);
echo $json; 


exit;
?>