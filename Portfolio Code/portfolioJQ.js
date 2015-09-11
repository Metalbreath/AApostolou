// JavaScript Document

$(document).ready(function(){
	
	setMainColumnWidth();
	webFred();
	articleFred();
	$("#navWork").click(showForm);
		
		function hideForm(e){
			  $("#navDrop").hide("fast"); 
			  $("#navWork").off('click', hideForm);
			  $("#navHide").hide();
		}
		
		function showForm(e){
			 $("#navDrop").toggle();
			 $("#navHide").toggle();
			  $("#navHide").on('click', hideForm);
		}
		
		
		
		$("#navDrop").hover(function(){
			$(this).css( 'cursor', 'pointer' );
		});
		
		$("#webPort").click(showPort);
			
			function hidePort(e){
				  $("#portfolioPopup").hide(); 
				  $("#navHide").hide();
				  $("#webPort").off('click', hidePort);
			}
			
			function showPort(e){
				 $("#portfolioPopup").toggle();
				 $("#navDrop").hide();
				  $("#navHide").on('click', hidePort);
			}

		$("#webPoke").click(showPoke);
			
			function hidePoke(e){
				  $("#pokemonPopup").hide(); 
				  $("#navHide").hide();
				  $("#webPoke").off('click', hidePoke);
			}
			
			function showPoke(e){
				 $("#pokemonPopup").toggle();
				 $("#navDrop").hide();
				  $("#navHide").on('click', hidePoke);
			}
		
		$("#webAA").click(showAA);
		
			function hideAA(e){
				  $("#AAPopup").hide(); 
				  $("#navHide").hide();
				  $("#webAA").off('click', hideAA);
			}
			
			function showAA(e){
				 $("#AAPopup").toggle();
				 $("#navDrop").hide();
				  $("#navHide").on('click', hideAA);
			}

		$("#webMaria").click(showMaria);
			
			function hideMaria(e){
				  $("#MariaPopup").hide(); 
				  $("#navHide").hide();
				  $("#webMaria").off('click', hideMaria);
			}
			
			function showMaria(e){
				 $("#MariaPopup").toggle();
				 $("#navDrop").hide();
				  $("#navHide").on('click', hideMaria);
			}

		$("#webMTV").click(showMTV);
			
			function hideMTV(e){
				  $("#MTVPopup").hide(); 
				  $("#navHide").hide();
				  $("#webMTV").off('click', hideMTV);
			}
			
			function showMTV(e){
				 $("#MTVPopup").toggle();
				 $("#navDrop").hide();
				  $("#navHide").on('click', hideMTV);
			}
	//$("#leftWork").click(function(){
//			
//			
//			$(".workHistory").removeClass("noShow");
//			$("#skillsContainer").addClass("noShow");
//			$("#rightLanguage").addClass("noShow");
//			$("#rightInterests").addClass("noShow");
//			$("#rightPublications").addClass("noShow");
//			$("#rightCourses").addClass("noShow");
//		});
//		$("#leftSkills").click(function(){
//			$(".workHistory").addClass("noShow");
//			$("#skillsContainer").removeClass("noShow");
//			$("#rightLanguage").addClass("noShow");
//			$("#rightInterests").addClass("noShow");
//			$("#rightPublications").addClass("noShow");
//			$("#rightCourses").addClass("noShow");
//		});
//		$("#leftLanguage").click(function(){
//			$(".workHistory").addClass("noShow");
//			$("#skillsContainer").addClass("noShow");
//			$("#rightLanguage").removeClass("noShow");
//			$("#rightInterests").addClass("noShow");
//			$("#rightPublications").addClass("noShow");
//			$("#rightCourses").addClass("noShow");
//		});
//		$("#leftInterests").click(function(){
//			$(".workHistory").addClass("noShow");
//			$("#skillsContainer").addClass("noShow");
//			$("#rightLanguage").addClass("noShow");
//			$("#rightInterests").removeClass("noShow");
//			$("#rightPublications").addClass("noShow");
//			$("#rightCourses").addClass("noShow");
//		});
//		$("#leftPublications").click(function(){
//			$(".workHistory").addClass("noShow");
//			$("#skillsContainer").addClass("noShow");
//			$("#rightLanguage").addClass("noShow");
//			$("#rightInterests").addClass("noShow");
//			$("#rightPublications").removeClass("noShow");
//			$("#rightCourses").addClass("noShow");
//		});
//		$("#leftCourses").click(function(){
//			$(".workHistory").addClass("noShow");
//			$("#skillsContainer").addClass("noShow");
//			$("#rightLanguage").addClass("noShow");
//			$("#rightInterests").addClass("noShow");
//			$("#rightPublications").addClass("noShow");
//			$("#rightCourses").removeClass("noShow");
//		});
		
	$(".leftMenuItems").hover(function(){
		$(this).css( 'cursor', 'pointer' );
	});
	
	$(".leftMenuItems").mousedown(function(){
		
		$(this).addClass("clickedLeftMenu");
	});
	$(".leftMenuItems").mouseup(function(){
	  $(this).removeClass("clickedLeftMenu");  
	});

	$('#navCV').click(function(){
		$('#dialog').removeClass('noShow');
	});
	
	
	$('#btnYes').click(function(e) {
    e.preventDefault();  
    window.location.href = 'uploads/Andreas_Apostolou_CV.pdf';
	});
	
	$('#btnNo').click(function(){
		$('#dialog').addClass('noShow');
	});
	
	
	
	//Mobile JQ
	

 
	
	var active1 = false;
  var active2 = false;
  var active3 = false;


    $('.mobLogo').on('mousedown touchstart', function() {
		
		if (!active3) $(this).find('.mobHome').css({'background-color': '#01579B', 'transform': 'translate(-125px,0px)'});
		else $(this).find('.mobHome').css({'background-color': '#01579B', 'transform': 'none'});
		 if (!active2) $(this).find('.mobCV').css({'background-color': '#01579B', 'transform': 'translate(-85px,85px)'});
		else $(this).find('.mobCV').css({'background-color': '#01579B', 'transform': 'none'});
		if (!active1) $(this).find('.mobContact').css({'background-color': '#01579B', 'transform': 'translate(0px,120px)'});
		else $(this).find('.mobContact').css({'background-color': '#01579B', 'transform': 'none'});   
	   
		active1 = !active1;
		active2 = !active2;
		active3 = !active3;
   
      
    });
	
	
//		$(".dropDownTitles").hover(function(){
//		$(this).css("background", "green");
//	});

	
	$("#dropWork").click(function(){
		$("#dropWCont").toggle();
		$("#dropSCont").hide();
		$("#dropLCont").hide();
		$("#dropPCont").hide();
		$("#dropICont").hide();
		$("#dropCCont").hide();
	});
	$("#dropSkills").click(function(){
		$("#dropWCont").hide();
		$("#dropSCont").toggle();
		$("#dropLCont").hide();
		$("#dropPCont").hide();
		$("#dropICont").hide();
		$("#dropCCont").hide();
	});
	$("#dropLanguages").click(function(){
		$("#dropWCont").hide();
		$("#dropSCont").hide();
		$("#dropLCont").toggle();
		$("#dropPCont").hide();
		$("#dropICont").hide();
		$("#dropCCont").hide();
	});
	$("#dropPub").click(function(){
		$("#dropWCont").hide();
		$("#dropSCont").hide();
		$("#dropLCont").hide();
		$("#dropPCont").toggle();
		$("#dropICont").hide();
		$("#dropCCont").hide();
	});
	$("#dropInterests").click(function(){
		$("#dropWCont").hide();
		$("#dropSCont").hide();
		$("#dropLCont").hide();
		$("#dropPCont").hide();
		$("#dropICont").toggle();
		$("#dropCCont").hide();
	});
	$("#dropCourses").click(function(){
		$("#dropWCont").hide();
		$("#dropSCont").hide();
		$("#dropLCont").hide();
		$("#dropPCont").hide();
		$("#dropICont").hide();
		$("#dropCCont").toggle();
	});
	
});



function webFred(){
	console.log("I am in the top slider");
	$("#webSlider").carouFredSel({
		//width:"variable",
		items: {
			visible: 1,
			//width: "100%",
			height: "100%"
		},
		scroll: {
			easing: "swing",
			duration: 700,
			pauseOnHover: true
		},
		auto: 5000,
		prev: {
			button: "#prevBtn",
			key: "left"
		},
		next: {
			button: "#nextBtn",
			key: "right"
		},
		pagination: "#pagi",
		auto: true
	});	
}

$(window).resize(function() {
	setMainColumnWidth();
	setTimeout(function() { setMainColumnWidth(); } ,150);
});

function setMainColumnWidth() {
	var mainWidthTop = $("#webSliderContainer").width();
	webFred();
	$(".webImages").css("width",mainWidthTop);
	var contWidthTop = mainWidthTop*4;
	$("#webSliderContainer .caroufredsel_wrapper").css("width",contWidthTop);
	console.log("Slider Width: " + mainWidthTop + ", Big Cont Width: " + contWidthTop);
	$("#webSlider").css("width","auto");
	
	var mainWidthBot = $("#contentSlider").width();
	webFred();
	$(".sliderItem").css("width",mainWidthBot);
	var contWidthBot = mainWidthBot*4;
	$("#contentSlider .caroufredsel_wrapper").css("width",contWidthBot);
	console.log("Slider Width: " + mainWidthBot + ", Big Cont Width: " + contWidthBot);
	$("#contentSlider").css("width","auto");
	
}

function articleFred(){
	$("#contentSlider").carouFredSel({
	circular: false,
	infinite: false,
	items: {
		visible: 1,
		width: "100%",
		height: "100%"
	},
	//scroll: "elastic",   
	auto: false
	});
	$("#contentSlider").trigger("linkAnchors", ["#leftMenu", "a"]);	
}
	
	
