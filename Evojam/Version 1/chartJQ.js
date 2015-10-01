$(document).ready(function(){
	//Global
	var labelTags = [["Week 47"],["week 48"], ["Week 49"], ["Week 50"], ["Week 51"], ["Week 52"]];
	
	var min = '0';
	var dollarSign = function(e) {
				if (e.value < min)
					min = e.value;
		
				if (e.value === min)
					return '$';
				else
					return e.value;
			};
		
	//Line Chart JQuery
	
	// Getting JSON file
	$.getJSON('dataLine.json', function(dataLine){
		console.log(dataLine);
		
		
		
		//Translate JSON
		var chartjsDataLine = [];
		for (var i = 0; i < dataLine.length; i++) {
   		chartjsDataLine.push(dataLine[i].data); 
			}
		//Chart Line Data
		var lineChartData = {
			labels : labelTags,
			datasets: [
  			{     	 
            label: "Net Comp",
        	fillColor : "#C2F0FF",
			strokeColor : "#F02626",
  			pointColor : "#F02626",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "#F02626",
			data : chartjsDataLine[0]},
			{
			label: "AnalyzerHR",
        	fillColor : "#C2F0FF",
			strokeColor : "#26F041",
  			pointColor : "#26F041",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "#26F041",
			data : chartjsDataLine[1]},
			{
			label: "Question Right",
        	fillColor : "#fff",
			strokeColor : "#20AEFA",
  			pointColor : "#20AEFA",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "#20AEFA",
			data : chartjsDataLine[2]}
			
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
				scaleStartValue: 0,
				maintainAspectRatio: true,
				 scaleLabel: dollarSign
		};
		// Drawing the Chart on the Element in DOM with the id = lineChart
		var ctx = document.getElementById("lineChart").getContext("2d");
		var myLineChart = new Chart(ctx).Line(lineChartData, options);
	
	});
	


	
	
	//Bar Chart JQuery
	
	
	// Getting JSON file
	$.getJSON('dataBar.json', function(dataBar){
		console.log(dataBar);
		
	//Translate JSON
		var chartjsDataBar = [];
		for (var i = 0; i < dataBar.length; i++) {
   		chartjsDataBar.push(dataBar[i].data); 
		};
			
		var BarChartData = {
			labels : labelTags,
			datasets: [
  			{     	 
            label: "Net Comp",
        	fillColor : "#F02626",
			strokeColor : "#F02626",
  			pointColor : "#F02626",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "#F02626",
			data : chartjsDataBar[0]},
			{
			label: "AnalyzerHR",
        	fillColor : "#26F041",
			strokeColor : "#26F041",
  			pointColor : "#26F041",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "#26F041",
			data : chartjsDataBar[1]},
			{
			label: "Question Right",
        	fillColor : "#20AEFA",
			strokeColor : "#20AEFA",
  			pointColor : "#20AEFA",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "#20AEFA",
			data : chartjsDataBar[2]}
			
		]};
		
		var minBar = '0';
		var options = {
				scaleShowVerticalLines: false,
				barShowStroke : false,
				barValueSpacing : 26,
    			barDatasetSpacing : 8,
				scaleOverride: true,
				scaleSteps: 2,
				scaleStepWidth: 5,
				scaleStartValue: 0,
				scaleOverlay : false,
				 scaleLabel:  function(e) {
				if (e.value < minBar){
					minBar = e.value;
				}
		
				if (e.value === minBar){
					return '';
				}else{
					return e.value;
				}
			}
		};
		var ctx2 = document.getElementById("barChart").getContext("2d");
		var myBarChart = new Chart(ctx2).Bar(BarChartData, options);
	});
	
	
	$.getJSON('dataInfo.json', function(dataInfo){
		console.log(dataInfo);
	
	
	$(".revValue").html(dataInfo[0].revenueValue);
	
	$(".instalValue").html(dataInfo[0].installations);
	
	
	});
	
	
	
	
});