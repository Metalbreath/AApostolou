<?php
	
	$array = [
		[  
	"label"=> "Net Comp",
	"color"=> "#F02626",
	"data"=> [250, 520, 600, 850, 900, 300]
], [
	"label"=> "AnalyzerHR",
	"color"=> "#26F041",
	"data"=> [ 200, 300, 400,550, 750,  200 ]
], [
 	"label"=> "Question Right",
	"color"=> "#20AEFA",
	"data"=> [ 180, 200, 150,  380,  400, 100] 
]
	];
	
	if($_GET['type'] == "line"){
		echo json_encode($array);	
	}
?>

