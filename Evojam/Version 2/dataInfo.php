<?php
	
	$array = [
	"revenueValue"=> 32.556,
	"installations"=> 136
	];
	
	if($_GET['type'] == "info"){
		echo json_encode($array);	
	}

?>