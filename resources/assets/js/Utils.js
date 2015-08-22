	
	
function Utils(){


}
	
Utils.nl2br=function(string) {
	string = escape(string);
    if (string.indexOf('%0D%0A') > -1) {
        var re_nlchar = /%0D%0A/g ;
    } else if (string.indexOf('%0A') > -1) {
        var re_nlchar = /%0A/g ;
    } else if (string.indexOf('%0D') > -1) {
        var re_nlchar = /%0D/g ;
    }
    return unescape(string.replace(re_nlchar, '<br />'));
} 

Utils.br2nl=function(str)  { 
	if(document.all)
		return str.replace(/(<br\/>|<br>|<BR>|<BR\/>)/g,"\n");
	else
		return str.replace(/(<br\/>|<br>|<BR>|<BR\/>)/g,"");
} 


Utils.getElementTopLeft = function(ele) {
	
	var top = 0;
	var left = 0;

	while(ele.tagName != "BODY") {
		top += ele.offsetTop;
		left += ele.offsetLeft;
		ele = ele.offsetParent;
		if(ele===null) break;
	}
	return { top: top, left: left };
}	
Utils.getDocHeight = function() {
	var D = document;
	return Math.max(
		
		Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
		Math.max(D.body.clientHeight, D.documentElement.clientHeight)
	);
}
