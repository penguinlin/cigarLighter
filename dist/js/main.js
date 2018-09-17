var mainJS = {};

// 首页订阅
mainJS.checkBailbox = function(el,el_error){
  　var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
　　if(el.val() === ""){ //输入不能为空
　　　　el_error.text("Can't be empty").show();
		return false;
　　}else if(!reg.test(el.val())){ //正则验证不通过，格式不对
　　　　el_error.text('Please enter a valid email address').show();
		return false;
　　}else{
	　　el_error.hide();
		return true;
　　}
}

$(function(){
	jQuery.validator.addMethod("formatDate", function(value, element) {   
	    var reg=/^\d{2}\/\d{2}\/\d{4}$/;
	    var isfull = false;
	    if(reg.test(value)){
	    	var dateArr = value.split('/').reverse().join('/');
	    	var birthDate = new Date(dateArr);
    	    var nowDateTime = new Date();
    	    var age = nowDateTime.getFullYear() - birthDate.getFullYear();
    	    //再考虑月、天的因素;.getMonth()获取的是从0开始的，这里进行比较，不需要加1
    	    if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
    	        age--;
    	    }
    	    if(age>=21){
    	    	isfull = true;
    	    }
	    }
	    return this.optional(element) || (reg.test(value)&&isfull);
	}, "Please enter a valid date of birth. You need to be at least 21 years of age to register.");


	var format = "mm/dd/yyyy";
	    var match = new RegExp(format
	        .replace(/(\w+)\W(\w+)\W(\w+)/, "^\\s*($1)\\W*($2)?\\W*($3)?([0-9]*).*")
	        .replace(/m|d|y/g, "\\d"));
	    var replace = "$1/$2/$3$4"
	        .replace(/\//g, format.match(/\W/));
	function doFormat(target)
	{
       target.value = target.value
           .replace(/(^|\W)(?=\d\W)/g, "$10")   // padding
           .replace(match, replace)             // fields
           .replace(/(\W)+/g, "$1");            // remove repeats
	}
	$('input[dateAuto]').on('keyup',function(e){
		if($(this).val().length>10){
			$(this).val($(this).val().substring(0,10));
			return;
		}
		if(!e.ctrlKey && !e.metaKey && (e.keyCode == 32 || e.keyCode > 46)){
			doFormat(e.target);
		}		                
	})
})