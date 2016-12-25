$(document).ready(function(e) {
	//申请表单验证
	$("#js_demoform").Validform({
		tiptype:function(msg,o,cssctl){
			$("#js_tip").text(msg);		
		}
	});

	
	/*输入框移入改变样式*/
    $(".js_input_applay").focus(function(){
		$(this).parents("label").addClass("focus");
	}).blur(function(e) {
        $(this).parents("label").removeClass("focus");
    });
});