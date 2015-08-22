//四重地址下拉選單
/* 
//演示範例 HTML
<script type="text/javascript" src="js/address_data.js"></script>
<div class="row">
	<div class="col-xs-12 col-sm-6 col-lg-3">
	  <div class="form-group">
		<label class="control-label col-xs-4 col-md-5 ">居住國家：</label>
		<div class="col-xs-8 col-md-7 ">
		  <select id="country_id" class="form-control col-md-12 select2me" data-placeholder="Select...">
			<option value="0">Select...</option>
			<?php for($i = 0; $i < $countries_num; $i++):?>
			<option value="<?php echo $countries[$i]['id']; ?>" <?php if($country_id == $countries[$i]['id']) echo 'selected';?>><?php echo $countries[$i]['name']; ?></option>
			<?php endfor ?>
		  </select>
		</div>
	  </div>
	</div>
	<div class="col-xs-12 col-md-6 col-lg-3 ">
	  <div class="form-group">
		<label class="control-label col-xs-4 col-md-5 ">地區：</label>
		<div class="col-xs-8 col-md-7 ">
		  <select id="state_id" class="form-control col-md-12 select2me" data-placeholder="Select..." disabled>
		  <option value="0">Select...</option>
		  </select>
		</div>
	  </div>
	</div>
	<div class="col-xs-12 col-md-6 col-lg-3 ">
	  <div class="form-group">
		<label class="control-label col-xs-4 col-md-5 ">城市1：</label>
		<div class="col-xs-8 col-md-7 ">
		  <select id="city1_id" class="form-control col-md-12 select2me" data-placeholder="Select..." disabled>
		  <option value="0">Select...</option>
		  </select>
		</div>
	  </div>
	</div>
	<div class="col-xs-12 col-md-6 col-lg-3 ">
	  <div class="form-group">
		<label class="control-label col-xs-4 col-md-5 ">城市2：</label>
		<div class="col-xs-8 col-md-7 ">
		  <select id="city2_id" class="form-control col-md-12 select2me" data-placeholder="Select..." disabled>
		  <option value="0">Select...</option>
		  </select>
		</div>
	  </div>
	</div>
</div>
 */
 function set_address(){
	var api_path = 'api.php?req=address_selector';
	// 判斷country_id是否有預設值
	var defaultValue = false;
    if (0 < $.trim($('#set_default_addr').val()).length) {
        $set_default_addr = $('#set_default_addr').val().split(',');
        defaultValue = true;
    }
    // 設定預設選項
    if (defaultValue) {
		$("#country_id").prop("value",$set_default_addr[0]);
    }
	//開始產生關聯下拉式選單
	$('#country_id').change(function(){
		var inputs={lv:2,id:$(this).val(),};
		$("#state_id").prop('disabled', true).select2("val", "0");
		$("#city1_id").prop('disabled', true).select2("val", "0");
		$("#city2_id").prop('disabled', true).select2("val", "0");
		
		$.post(api_path,inputs,function(data){
			if(data['status']=='success'){
				// 觸發第二階下拉式選單
				$("#state_id option").remove();
				var res = JSON.parse ( data['response'] );
				
				var res_cnt = 0;
				$.each(res, function(key, value) {
					  $("#state_id").append($("<option></option>").prop("value", key).text(value));
					  res_cnt ++;
				});
				
				if(res_cnt > 1){
					$("#state_id").prop('disabled', false);
					// 設定預設選項
					if (defaultValue) {
						$("#state_id").select2("val", $set_default_addr[1]).trigger('change');
					} else {
						$("#state_id").select2("val", "0").trigger('change');
					}
				}
			}
		},'json');
	}).trigger('change');

	$('#state_id').change(function(){
		var inputs={lv:3,id:$(this).val(),};
		$("#city1_id").prop('disabled', true);
		$("#city2_id").prop('disabled', true);
		$.post(api_path,inputs,function(data){
			if(data['status']=='success'){
				// 觸發第三階下拉式選單
				$("#city1_id option").remove();
				var res = JSON.parse ( data['response'] );
				var res_cnt = 0;
				$.each(res, function(key, value) {
					  $("#city1_id").append($("<option></option>").prop("value", key).text(value));
					  res_cnt ++;
				});
				if(res_cnt > 1){
					$("#city1_id").prop('disabled', false);
					// 設定預設選項
					if (defaultValue) {
						$("#city1_id").select2("val", $set_default_addr[2]).trigger('change');
					} else {
						$("#city1_id").select2("val", "0").trigger('change');
					}
				}
				//console.log(data['response']);
			}
		},'json');
	}).trigger('change');
	
	$('#city1_id').change(function(){
		var inputs={lv:4,id:$(this).val(),};
		$("#city2_id").prop('disabled', true).select2("val", "0");
		$.post(api_path,inputs,function(data){
			if(data['status']=='success'){
				// 觸發第二階下拉式選單
				$("#city2_id option").remove();
				var res = JSON.parse ( data['response'] );
				
				var res_cnt = 0;
				$.each(res, function(key, value) {
					  $("#city2_id").append($("<option></option>").prop("value", key).text(value));
					  res_cnt ++;
				});
				if(res_cnt > 1){
					$("#city2_id").prop('disabled', false);
					// 設定預設選項
					if (defaultValue) {
						$("#city2_id").select2("val", $set_default_addr[3]);
					} else {
						$("#city2_id").select2("val", "0").trigger('change');
					}
				}
			}
		},'json');
	}).trigger('change');
}