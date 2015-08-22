function Worker(looper){
	var complete=false;
	var isRunning=false;
	var task_size=0;
	var process_index=0;
	var taskArr=[];
	var This=this;
	This.process=function(){

		var task = taskArr[process_index];
			
		if(typeof(task.during)==='undefined'){
			if(typeof(task.fun)==="object"){
				var arr =task.fun;
				for(var i=0;i<(arr.length);i++){
				
					arr[i]();
				}
			}else{
				task.fun();
			}
			if(process_index<task_size-1){
					process_index++;
					This.process();
			}else{
					isRunning=false;
			}
		}else{
		
			if(typeof(task.fun)==="object"){
				
				var arr =task.fun;
				
				var size=arr.length;
				var count=0;
				for(var i=0;i<(arr.length);i++){
					//丟到looper去執行等回應
					
					//alert(arr[i]);
					looper.runFinite(task.during,arr[i],function(){
						count++;
						if(count==size){
							if(process_index<task_size-1){
									process_index++;
									This.process();
							}else{
									isRunning=false;
							}
						}
						
					})
				}
			}else{
				
				looper.runFinite(task.during,task.fun,function(){
						if(process_index<task_size-1){
								process_index++;
									
								This.process();
								
						}else{
								isRunning=false;
						}
				})
			}
		}
		

	}
	this.runTask=function(fun,during){
			
		taskArr[task_size]=new Task(fun,during,false);
		task_size++;
		
		if(!isRunning){
			isRunning=true;
			
			This.process();
		}
		//alert(this);
		return this;
	}
	
	function Task(fun,during,sync){
		this.during=during;
		this.fun=fun;
		this.sync=sycn
		//alert(this);
		
	}
}