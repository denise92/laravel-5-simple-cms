
function InfiniteItem(tid,start_time,task){
	this.isRunning;
	this.update = function(curr_time){
		task(curr_time-start_time);
	}
}
function FiniteItem(tid,start_time,total_time,task,looper,onComplete){
	
	this.isRunning;
	this.update = function(curr_time){
	
	
		var percent=(curr_time-start_time)/total_time;
		if(percent>1)percent=1;

		task(percent);
		if((curr_time-start_time)>total_time){
		
			looper.remove(tid);
			if(typeof(onComplete)==='undefined'){
			}else
			onComplete();
		}
		
			
	}
}
function Looper(){
	var id=0;
	var This=this;
	This.currTime= new Date();
	This.lastTime= new Date();
	This.elapsedTime;
	
	This._size=0;
	This.isRunning=false;
	This.sid;
	This.arr=new Array();
	
	this.runInfinite=function(task){
		
		id++;
		This.arr["I"+id]=new InfiniteItem("I"+id,new Date(),task);
		This._size++;
		if(!This.isRunning){
			this.start();
		}
		
	}
	this.runFinite=function(total_time,task,onComplete){
			
		id++;
		This.arr["I"+id]=new FiniteItem("I"+id,new Date(),total_time,task,this,onComplete);
		This._size++;
		if(!This.isRunning){
			this.start();
		}

	}
	this.start=function(){
		
			This.currTime=This.lastTime=new Date()
			This.sid=setInterval(this.loop,15);
			This.isRunning=true;
		
	}
	this.remove= function(tid){
		delete This.arr[tid];
		This._size--;
		if(This._size==0){
			this.stop();
		}
	}
	this.size=function(){
		return This._size;
	}
	this.stop=function(){
		clearInterval(This.sid);
		This.isRunning=false;
	}
	this.loop = function(){
		This.currTime=new Date();
		This.elapsedTime=This.currTime-This.lastTime;
		This.lastTime=This.currTime;
		//alert(This.elapsedTime);
		for(var key in This.arr){
			//if(This.arr[key].isRunning==true)
			This.arr[key].update(new Date());
		}
		//alert(elapsedTime);
		//對於所有元件 更新
	}

	
}
