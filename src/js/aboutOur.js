$(function() {
	FastClick.attach(document.body);
	var dai = $("#dai");
	var add = $("#add");
	//代理按钮点击
	dai.click(function(){
		dai.addClass("active");
		dai.find("img").attr("src","../img/aboutOur/dai-white@2x.png")
		window.location.href="agentElegant.html";
	})
	//加盟按钮点击
	add.click(function(){
		add.addClass("active");
		add.find("img").attr("src","../img/aboutOur/meng-white@2x.png")
		window.location.href="joinInPolicy.html";
	})
});