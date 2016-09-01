// $(function(){
//     $("#nav").selectable();
//     // $("#section1").click(function(){
//     // 	$("#section1").toggle();
//     // 	// alert("rubbish jquery");
//     // });
// });
var prevPageNum = 0;
$(function(){
	// $("#nav").find("a").click(function(){
	// 	// alert("nav > a is clicked");
	// 	$("#nav").find("a").removeClass("active");
	// 	$(this).addClass("active");
	// });
	$(window).scroll(function() {
	    var height = $(window).scrollTop();
	    var windowHeight = $(window).height();
	    // console.log(height);
	    // console.log(windowHeight);
	    var currentPageNum = Math.floor(height/windowHeight);
	    // console.log(currentPageNum);

	    if(currentPageNum !== prevPageNum) {
	    	prevPageNum = currentPageNum;
	        $("#nav").find("a").removeClass("active");
			$("#nav").find("a").eq(prevPageNum).addClass("active");
	    }
	});
});

