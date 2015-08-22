/**

*/
/*--init $$--*/
var $$={};
$$.eval=function(str){
	window.eval(str);
}
/*--include=--*/
$$.include_map={};
$$.include=function(path){
	if($$.include_map[path])return;
	var data=$$.getSync(path,'html');
	$$.eval(data);
}
/*--utils--*/
$$.utils={};
$$.utils.getDocHeight = function() {
	var D = document;
	return Math.max(
		Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
		Math.max(D.body.clientHeight, D.documentElement.clientHeight)
	);
}	
$$.body_height=function(){
	return $$.utils.getDocHeight();
}
$$.body_width=function(){
	return document.body.clientWidth;
}
/*--ajax--*/	
//
$$.ajax={};
$$.ajax.HttpRequest=function(){
	var xmlhttp=get_xhr();
	function get_xhr(){
		if (window.XMLHttpRequest) 
			return new XMLHttpRequest();
		else if (window.ActiveXObject)  //for IE6, IE5
			return new ActiveXObject('Microsoft.XMLHTTP');
		return null;
	}
	
	this.querySync=function(source,method,params){
		xmlhttp.open(method,source,false);
		//xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
		var fd=get_fd(params);
		xmlhttp.send(fd);
		if(xmlhttp.status==200)
		return xmlhttp.responseText;
		return 'status code='+xmlhttp.status;
	}
	this.query=function(source,method,params,responseFun){
		var fd=get_fd(params);
		xmlhttp.onreadystatechange=function(){			
			if (xmlhttp.readyState==4 ){
				if(xmlhttp.status==200){
					var req=xmlhttp.responseText;
					responseFun(req);
				}else responseFun('status code='+xmlhttp.status);
			}
		}	
		xmlhttp.open(method,source,true);
		xmlhttp.send(fd);
	}
	function get_fd(params){
		 var fd = new FormData();
		for(var key in params) fd.append(key,params[key]);
		return fd;
	}
}
//post
$$.post=function(path,params,cb,format){
	if(!format)  format='';
	var http_obj= new $$.ajax.HttpRequest();
	
	http_obj.query(path,'POST',params,function(data){
		switch(format.toLowerCase()){
			case 'json':{
				try{
					eval('var cb_data='+data);
					cb(cb_data);
					return;
				}catch(err){};
			}break;
			default:{cb(data);}break;
		}	
	});

}
//get
$$.get=function(path,cb,format){
}
//getSync
$$.getSync=function(path,format){
	if(!format)  format='';
	var http_obj= new $$.ajax.HttpRequest();
	var data=http_obj.querySync(path,'GET',{});
	switch(format.toLowerCase()){
		case 'json':{
			try{
				eval('var cb='+data);
				return cb;
			}catch(err){};
		}break;
	}
	return data;
}

/*--include--*/
$$.include=function(path){
	var data=$$.getSync(path,'');
	$$.eval(data);
}
	
/*--dom--*/
$$.dom={};
$$.dom.CreateXMLDocument =function(str) {
	var doc = document.implementation.createDocument ('http://www.w3.org/1999/xhtml', 'html', null);
	var body = document.createElementNS('http://www.w3.org/1999/xhtml', 'body');
	body.innerHTML=str;
	doc.documentElement.appendChild(body);
	return body;
}
/*--element--*/
$$.ele=function(id){
	var raw =document.getElementById(id);
	var obj={};
	obj.target=raw;
	function enable_childs_script(dom){
		for(var i=0;i<dom.childNodes.length;i++){			
			if(dom.childNodes[i] instanceof HTMLScriptElement)
				$$.eval(dom.childNodes[i].innerHTML);		
			if(dom.childNodes[i].childNodes.length>0)
				enable_childs_script(dom.childNodes[i]);
		}
	}
	obj.html=function(str){
		var doc=$$.dom.CreateXMLDocument(str);
		raw.innerHTML=str;
		enable_childs_script(doc);
		return raw.innerHTML;
	}
	obj.val=function(value){
		raw.value=value;
		return raw.value;
	}
	obj.css=function(key,value){
		raw.style[key]=value;
		return obj;
	}
	return obj;
}
/*--all--*/
$$.all=function(selector){
	var objs=document.querySelectorAll(selector);
	var col={};
	col.css=function(key,value){
		for(var i=0;i<objs.length;i++){
			objs[i].style[key]=value;
		}
		return col;
	}
	return col;
		
}
/*--on--*/

$$.on=function(event,cb){
	switch(event){
		case 'resize':{
			var resizeTimer = null;	
			window.onresize = function(event) { 
				if(resizeTimer)  clearTimeout(resizeTimer); 
				resizeTimer = setTimeout(cb,300);	
			}
		}break;
	}
}
	
	
	