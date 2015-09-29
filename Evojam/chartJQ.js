$(document).ready(function(){
	
	
	
	// Getting JSON file
	$.getJSON('data.json', function(data){
		console.log(data);
		
		
		
		var chartjsData = [];
		for (var i = 0; i < data.length; i++) {
   		chartjsData.push(data[i].data); 
			};
		//Chart Data
		lineChartData = {
			labels : [["Week 47"],["week 48"], ["Week 49"], ["Week 50"], ["Week 51"], ["Week 52"]],
			datasets: [
  			{     	 
            label: "Net Comp",
        	fillColor : "#C2F0FF",
			strokeColor : "#F02626",
  			pointColor : "#F02626",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "#F02626",
			data : chartjsData[0]},
			{
			label: "AnalyzerHR",
        	fillColor : "#C2F0FF",
			strokeColor : "#26F041",
  			pointColor : "#26F041",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "#26F041",
			data : chartjsData[1]},
			{
			label: "Question Right",
        	fillColor : "#fff",
			strokeColor : "#20AEFA",
  			pointColor : "#20AEFA",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "#20AEFA",
			data : chartjsData[2]}
			
		]};
		// Chart Options
		var options = {
			scaleShowVerticalLines: false,
			bezierCurve : false,
				pointDotRadius : 6,
				pointDotStrokeWidth : 2,
				datasetStrokeWidth : 12,
				scaleOverride: true,
				scaleSteps: 2,
				scaleStepWidth: 500,
				scaleStartValue: null,
				maintainAspectRatio: true
		}
		
		// Drawing the Chart on the Element in DOM with the id = lineChart
		var ctx = document.getElementById("lineChart").getContext("2d");
		var myLineChart = new Chart(ctx).Line(lineChartData, options);
	
	});
	
	var revValue = 32.556;
	$(".revValue").html(revValue);


});