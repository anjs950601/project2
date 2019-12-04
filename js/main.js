$(function(){
	var n=0;
	var t=0;
	// 전체메뉴 고정: 윈도우 상단 좌표가 80px보다 커지면 .fixed_nav에 show 클래스 추가
	var pageTop=false;
	setTimeout(function(){
		$("html").animate({scrollTop : 0}, 800, function(){
			pageTop=true;
			$(window).trigger("scroll");
		});
	}, 10);
	$(window).scroll(function(){
		if(pageTop == false){
			return;
		}

		t=$(window).scrollTop();
		if(t > 0){
			$(".fixed_nav").addClass("show");
		}
		else {
			$(".fixed_nav").removeClass("show");
		}

		if(t < $("#services").offset().top-100){
			n=0;
		}
		else if(t < $("#portfolio").offset().top-100){
			n=1;
		}
		else if(t < $("#about").offset().top-100){
			n=2;
		}
		else if(t < $("#team").offset().top-100){
			n=3;
		}
		else if(t < $("#signature").offset().top-100){
			n=4;
		}
		else if(t < $("#contact").offset().top-100){
			n=6;
		}
		else if(t < $("#footer").offset().top){
			n=6;
		}
		else{
			n=7;
		}
		console.log(n); // n만 얻으면 패럴렉스 ui가 완성
		$("#GNB a").removeClass("on");
		$("#GNB li").eq(n).find("a").addClass("on");
		$(".fixed_nav a").removeClass("on");
		$(".fixed_nav li").eq(n).find("a").addClass("on");
		$(".ani").eq(n).addClass("active");
		// css를 잡을 때, 처음부터 li로만 잡으면 a를 쓰거나 find("a")를 잡을 필요가 없어짐
	});
	// $(window).trigger("scroll"); // 강제로 최초 컨테이너 실행. 필수
	var targetY=0;
	$("#GNB li, .fixed_nav li").click(function(e){
		e.preventDefault();
		n=$(this).index();
		targetY=$(".container > .ani").eq(n).offset().top;
		console.log(targetY);
		$("html").animate({"scrollTop" : targetY}, 800);
	});
	$(".owner li").mouseenter(function(e){
		e.preventDefault();
		$(this).find("a").stop().fadeIn(500);
	});
	$(".owner li").mouseleave(function(e){
		e.preventDefault();
		$(this).find("a").stop().fadeOut(300);
	});


});
