function CalendarBox(){

	
	
}
CalendarBox.newInstance = function(){
	
	
	var td=new Date();
	var year=td.getFullYear();
	var moseDownFun;
	var month=td.getMonth()+1;	
	var blockArr;
	var calendar=document.createElement("DIV");
		calendar.style.width="150px";
		calendar.style.fontSize="14px";
		calendar.style.borderStyle='solid';
		calendar.style.borderWidth='1px';
		calendar.style.backgroundColor="white";
		calendar.getYear=function(){
			return year;
		}
		calendar.getMonth=function(){
			return month;
		}
		calendar.drawCal=function(inc){
			month+=inc;
			if(month == 0 ) {
				month=12;
				year--;
			}else if( month == 13 ) {
					 month=1;
					 year++;
			}
			calendar.instance(year, month);
		}

		calendar.instance=function(yr,mth){
			
		//	alert(yr+" "+mth);
			this.innerHTML="";
			//操作區
			var ctrlBar = document.createElement("DIV");
				ctrlBar.style.backgroundColor="orange";
				ctrlBar.style.fontWeight="bold";
				ctrlBar.style.color='white';
				ctrlBar.style.padding='3px';
					//前一x按鈕(月or年)
					var lastBtn = document.createElement("DIV");
						lastBtn.align="left";
						if(document.all)lastBtn.style.styleFloat="left";
						else lastBtn.style.cssFloat="left";
						lastBtn.style.cursor="pointer";
						
						lastBtn.innerHTML="◄";
						lastBtn.onmousedown=function(){
							calendar.drawCal(-1);
							
						}		

				ctrlBar.appendChild(lastBtn);
					
					//titleBar
					var titleBtn = document.createElement("DIV");
						titleBtn.align="center";
						titleBtn.style.width="100px";
						if(document.all)titleBtn.style.styleFloat="left";
						else titleBtn.style.cssFloat="left";
						
						titleBtn.style.marginLeft="10px";
						titleBtn.innerHTML=yr+"年"+mth+"月";
						titleBtn.onmousedown=function(){
							
							
						}		

				ctrlBar.appendChild(titleBtn);
				//下一x按鈕
					var nextBtn = document.createElement("DIV");
						nextBtn.align="right";
						if(document.all)nextBtn.style.styleFloat="right";
						else nextBtn.style.cssFloat="right";
						nextBtn.style.cursor="pointer";
						
						nextBtn.innerHTML="►";
						nextBtn.onmousedown=function(){
							calendar.drawCal(1);
							
						}		

				ctrlBar.appendChild(nextBtn);
					var br = document.createElement("BR");
						br.style.clear="both";
				ctrlBar.appendChild(br);
			calendar.appendChild(ctrlBar);
		//星期
		var weekList= document.createElement("DIV");
			weekList.style.padding="1px";
			weekList.style.fontWeight="bold";
			weekList.style.backgroundColor="#f0dfc0";
			for(var x=0;x<7;x++){
				var weekBox = document.createElement("DIV");
					weekBox.style.width="21px";
					weekBox.align="center";
					if(document.all)
						weekBox.style.styleFloat="left";
					else 
						weekBox.style.cssFloat="left";
					var weekStr="星<BR>期<BR>";
					switch(x){
						case 0: weekStr+="日";break;
						case 1: weekStr+="一";break;
						case 2: weekStr+="二";break;
						case 3: weekStr+="三";break;
						case 4: weekStr+="四";break;
						case 5: weekStr+="五";break;
						case 6: weekStr+="六";break;
					}
					weekBox.innerHTML=weekStr;
				weekList.appendChild(weekBox);
				
			}
			var br = document.createElement("BR");
				br.style.clear="both";
				weekList.appendChild(br);
			calendar.appendChild(weekList);
			//日期
		var contentBox = document.createElement("DIV");
			contentBox.style.padding="1px";
			contentBox.style.color='#808080';
			
			var days=new Date(yr,mth,0).getDate();
			
			
			var weekDay=new Date(yr,mth-1,1).getDay();
			
			var i=-1*weekDay;
			var noLastLine=false;;
			//先判斷第一天星期幾 前面要空xx格
			var line=document.createElement("DIV");
			blockArr=new Array();
			while(i<days){
				noLastLine=false;
				var block=document.createElement("DIV");
					block.style.width="21px";
					block.align="center";
				if(document.all)
					block.style.styleFloat="left";
				else 
					block.style.cssFloat="left";
				line.appendChild(block);
				if(i<0){//放空白
					
						
						block.innerHTML="&nbsp";
				}else{
						block.style.cursor="pointer";
						block.onmouseover=function(){
						//	if(this.attributes["lock"].value!="true"){
								this.style.backgroundColor="#e0e0e0";
								
						//	}
						}
						block.onmouseout=function(){
							//if(this.attributes["lock"].value!="true"){
								this.style.backgroundColor="";
							
							//}
						}
						if(moseDownFun!=null){
							block.onmousedown=function(){
							
								moseDownFun(this.year,this.month,this.date);
							}
						}
						block.innerHTML=(i+1)+"";
						blockArr[i]=block;
						block.year=yr;
						block.month=mth;
						block.date=i+1;
						var wd=new Date(yr,mth-1,i+1).getDay();
						if(wd==6){
							var br = document.createElement("BR");
								br.style.clear="both";
								line.appendChild(br);
								contentBox.appendChild(line);
							line=document.createElement("DIV");
							noLastLine=true;
						}
						
				}
				i++;
				
			}
			if(!noLastLine){
			var br = document.createElement("BR");
				br.style.clear="both";
				line.appendChild(br);
				contentBox.appendChild(line);
				}
			//計算天數
			//開始回圈 遇到星期六要換行 一直到最後一天結尾
			//
			calendar.appendChild(contentBox);
			
		
		}	
		
		calendar.onBlockMouseDown=function(fun){
			//對於所有的方塊都加入此事件
			moseDownFun=fun;
			for(var x=0;x<blockArr.length;x++){
				blockArr[x].onmousedown=function(){
					fun(this.year,this.month,this.date);
				}
			}
		}
	
		calendar.instance(year,month);
	return calendar;
}