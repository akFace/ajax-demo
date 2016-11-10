;
$(function() {
	var sec = $('.sec');
	var liaotian = $('.liaotian');
	var ul = $('.list');

	var btn = $('.btn');

	function func(text) {
		$.ajax({
			type: "get",
			url: "http://www.tuling123.com/openapi/api", //Api接口
			async: true,
			data: {
				key: '6002581905f542048dcb244eb90f0721', //参数
				info: text //传入输入的内容

			},
			success: function(res) {
				console.log(res);
				//创建节点
				var li = $('<li/>');
				var span = $('<span/>');
				span.html(res.text);
				span.appendTo(li);
				li.appendTo(ul).addClass('list_left');
				li[0].scrollIntoView(); //li[0]转化为原生，这里是让滚动条一直滚到可视区域
				if(res.url) { //如果搜索是图片，就执行这里
					span.html('正在为您跳转中...');
					span.appendTo(li);
					li.appendTo(ul).addClass('list_left');
					setTimeout(function() {  //找到内容后延时1.5秒在跳转（逼格装得高一点！）
						window.location.href = res.url;
					}, 1500)

				}
			}
		});
	}
	
	//回车发送
	$(document).on('keydown', function(e) {
		if(e.keyCode == 13) {
			var text = $('textarea').val();
			var li = $('<li/>');
			var span = $('<span/>');
			span.html(text);
			span.appendTo(li);
			li.appendTo(ul).addClass('list_right');
			func(text);
			$('textarea').val('');
		}

	})
	//点击发送
	btn.on('click',function(){
		var text = $('textarea').val();
			var li = $('<li/>');
			var span = $('<span/>');
			span.html(text);
			span.appendTo(li);
			li.appendTo(ul).addClass('list_right');
			func(text);
			$('textarea').val('');
	})
})