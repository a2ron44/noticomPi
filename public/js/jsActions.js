

function sendBuzz(){
	
	var url =  '/buzz/';
	
	var response = new Object();
	response.data = 0;
	response.err = null;
	
	$.ajax({
        type: "POST",
        url: url,
        dataType: 'json',
        cache: false ,
        data:  {},
        async:false,
        success: function(result){
            if(result.err != null){
            	response.err = result.err;
            	response.data = result.data;

            } else {
            response.err = result.err;
        	response.data = result.data;
            }
            
        }
    });
	
	return response;
}

function sendTalk(text){
	
	var url =  '/talk/';
	
	var response = new Object();
	response.data = 0;
	response.err = null;
	
	var options = new Object();
	options.text = text;
	
	$.ajax({
        type: "POST",
        url: url,
        dataType: 'json',
        cache: false ,
        data:  options,
        async:false,
        success: function(result){
            if(result.err != null){
            	response.err = result.err;
            	response.data = result.data;

            } else {
            response.err = result.err;
        	response.data = result.data;
            }
            
        }
    });
	
	return response;
}