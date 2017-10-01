
$(function() {
	var menuBtn = $("#showMenu");
	var menuShade = $(".menu-shade");
	var menuBtn_img = menuBtn.find("img");
	//点击页面右上角菜单按钮显示菜单列表
	menuBtn.click(function() {
		toggleMenu(menuBtn_img);
		menuShade.toggle();
	})
	//点击菜单列表关闭自己
	menuShade.click(function(){
		toggleMenu(menuBtn_img);
		menuShade.toggle();
	})
	//关于我们、产品介绍、减肥课堂下的tab切换
	var tab_li = $(".tab ul li");
	var show_tab_content = $(".tab-content");//array
	//初始化
	show_tab_content.eq(1).hide();
	show_tab_content.eq(2).hide();
	
	tab_li.click(function(){
		var currentIndex = $(this).index();
		console.log($(this).index());
		tab_li.find("a").removeClass("active");
		$(this).find("a").addClass("active");
		show_tab_content.eq(currentIndex).show().siblings(".tab-content").hide();
	})
	
	//菜单按钮状态切换
	function toggleMenu(menuBtn_img) {
		if(menuBtn_img.attr("src")=="../img/common/menu@2x.png"){
			menuBtn_img.attr("src","../img/common/menu-open@2x.png");
		}else {
			menuBtn_img.attr("src","../img/common/menu@2x.png");
		}
	}

})