$(function(){
// 400px 갤러리
	var n=0;
	var targetx=0;

	$(".controller li").click(function(e){
		// a href의 링크 기능을 jquery를 이용해 막아야 함
		e.preventDefault();
		n=$(this).index();
		targetx=n * -1 * 300;

		$(".owner").css({"top" : targetx});

		$(".controller li").removeClass("on");
		$(this).addClass("on");
	});
});
