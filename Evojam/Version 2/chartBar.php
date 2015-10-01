<?php
	
	$array = [
		[  
	"label"=> "Net Comp",
	"color"=> "#F02626",
	"data"=> [0, 6, 7, 8, 9, 3]
], [
	"label"=> "AnalyzerHR",
	"color"=> "#26F041",
	"data"=> [ 0, 4, 3, 5, 7,  2 ]
], [
 	"label"=> "Question Right",
	"color"=> "#20AEFA",
	"data"=> [ 0, 3, 1,  3,  3, 1] 
]
	];
	
	if($_GET['type'] == "bar"){
		echo json_encode($array);	
	}
?>