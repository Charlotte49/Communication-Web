<?php
$date=getdate();
$displayDate='Il est : '.$date['hours'].':'. $date['minutes'].':'.$date['seconds'];
$array = array( $displayDate,'<br> { <br> hours :'.$date['hours'], '<br> minutes : '.$date['minutes'],'<br> seconds :'.$date['seconds'],"<br> } <br>");

$json=json_encode($array);
echo "<br>";
print_r($json);
?>