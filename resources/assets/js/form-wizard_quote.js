var FormWizard = function () {
    return {
        //新增收庫需求
        import_query: function () {
            if (!jQuery().bootstrapWizard) {
                return;
            }
			
            var form = $('#submit_quote_form_import_query');
            var error = $('.alert-danger', form);
            var success = $('.alert-success', form);

            form.validate({
                doNotHideMessage: true, //this option enables to show the error/success messages on tab switch.
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
				ignore: [],  
                rules: {
					
					//新增需求單
                    quote_no: {
                        required: true
                    },
                    //選擇倉庫
                    import_query_order_no: {
                        required: true
                    },
                    import_query_receive_date: {
                        required: true
                    },
                    
					import_query_warehouse_id: {
                        required: true
                    }, 
					import_query_supplier_id: {
                        required: true
                    }, 
                    //選擇料品
                    import_query_item_res: {
                        required: true,
						minlength: 1
                    },
                    'import_query_spec_qty[]': {
						digits: true,
                        required: true,
						minlength: 1
                    },
                    'import_query_price_tax[]': {
                        number: true,
                        minlength: 0
                    },
                    'import_query_price[]': {
                        number: true,
                        minlength: 0
                    }
                    
                },

                messages: { // custom messages for radio buttons and checkboxes
                    'import_query_spec_qty[]': {
						digits: "請輸入數字",
                        required: "請輸入收貨數量",
                    },
                    'import_query_price_tax[]': {
                        number: "請輸入數字",
                    },
                    'import_query_price[]': {
                        number: "請輸入數字",
                    },
					"quote_no": {required: "報價單編號 無效"},
					"import_query_order_no": {required: "收貨需求單編號 無效"},
                    "import_query_receive_date": {required: "請先選擇 預計到貨日"},
                    "import_query_warehouse_id": {required: "請先選擇 倉庫"},
					"import_query_supplier_id": {required: "請先選擇 供應商"},
					"import_query_item_res": {required: "請先選擇 料品"},
                },

                errorPlacement: function (error, element) { // render error placement for each input type
                    /* if (element.attr("name") == "gender") { // for uniform radio buttons, insert the after the given container
                        error.insertAfter("#form_gender_error");
                    } else if (element.attr("name") == "payment[]") { // for uniform radio buttons, insert the after the given container
                        error.insertAfter("#form_payment_error");
                    } else {
                        error.insertAfter(element); // for other inputs, just perform default behavior
                    } */
					error.insertAfter(element); // for other inputs, just perform default behavior
                },

                invalidHandler: function (event, validator) { //display error alert on form submit   
                    success.hide();
                    error.show();
                    Metronic.scrollTo(error, -200);
                },

                highlight: function (element) { // hightlight error inputs
                    $(element)
                        .closest('.form-group').removeClass('has-success').addClass('has-error'); // set error class to the control group
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    $(element)
                        .closest('.form-group').removeClass('has-error'); // set error class to the control group
                },

                success: function (label) {
                    if (label.attr("for") == "gender" || label.attr("for") == "payment[]") { // for checkboxes and radio buttons, no need to show OK icon
                        label.closest('.form-group').removeClass('has-error').addClass('has-success');
                        label.remove(); // remove error label here
                    } else { // display success icon for other inputs
                        label.addClass('valid') // mark the current input as valid and display OK icon
                        .closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
                    }
                },

                submitHandler: function (form) {
                    success.show();
                    error.hide();
                    //add here some ajax code to submit your form or just call form.submit() if you want to submit the form without ajax
                }

            });
            
            //取得收貨料品名細
            var displayConfirm = function() {
                //取得出貨料品名細
                var quote_import_spec_info = [];
                $('[name="quote_import_spec_info[]"]').each(function(){
                    quote_import_spec_info.push(JSON.parse (decodeURIComponent($(this).val())));
                });
                // console.log(quote_export_spec_info);
                var data = '';
                for(var i = 0; i < quote_import_spec_info.length; i++){
                    data = data + '<tr>';
                    data = data + '<td>' + quote_import_spec_info[i]['item_no'] + '</td>';
                    data = data + '<td>' + quote_import_spec_info[i]['item_name'] + '</td>';
                    data = data + '<td>' + quote_import_spec_info[i]['temperature_name'] + '</td>';
                    data = data + '<td>' + quote_import_spec_info[i]['spec_type_name'] + '</td>';
                    data = data + '<td>' + quote_import_spec_info[i]['spec_qc_name'] + '</td>';
                    data = data + '<td>' + quote_import_spec_info[i]['date_limit'] + '</td>';
                    data = data + '<td>' + quote_import_spec_info[i]['price_tax'] + '</td>';
                    data = data + '<td>' + quote_import_spec_info[i]['price'] + '</td>';
                    data = data + '<td>' + quote_import_spec_info[i]['item_qty'] + '</td>';
                    data = data + '<td>' + quote_import_spec_info[i]['item_qty_box'] + '</td>';
                    data = data + '</tr>';
                }
                $("#quote_import_display_data tbody").html(data);
                $('#tab4_import_query .form-control-static', form).each(function(){
                    var input = $('[name="'+$(this).attr("data-display")+'"]', form);
                    if (input.is(":radio")) {
                        input = $('[name="'+$(this).attr("data-display")+'"]:checked', form);
                    }
                    if (input.is(":text") || input.is("textarea")) {
                        $(this).html(input.val());
                    } else if (input.is("select")) {
                        $(this).html(input.find('option:selected').text());
                    } else if (input.is(":radio") && input.is(":checked")) {
                        $(this).html(input.attr("data-title"));
                    }
                });
                /*$('#tab4_import_query .form-control-static', form).each(function(){
                    var input = $('[name="'+$(this).attr("data-display")+'"]', form);
                    if (input.is(":radio")) {
                        input = $('[name="'+$(this).attr("data-display")+'"]:checked', form);
                    }
                    if (input.is(":text") || input.is("textarea")) {
                        $(this).html(input.val());
                    } else if (input.is("select")) {
                        $(this).html(input.find('option:selected').text());
                    } else if (input.is(":radio") && input.is(":checked")) {
                        $(this).html(input.attr("data-title"));
                    } else if ($(this).attr("data-display") == 'import_query_spec_qty') {
                        var import_query_spec_qty = [];
                        $('[name="import_query_spec_qty[]"]').each(function(){
                            import_query_spec_qty.push($(this).val());
                        });
                        $(this).html(import_query_spec_qty.join("<br>"));
                    } else if ($(this).attr("data-display") == 'import_query_spec_qty_box') {
                        var import_query_spec_qty_box = [];
                        $('[name="import_query_spec_qty_box[]"]').each(function(){
                            import_query_spec_qty_box.push($(this).val());
                        });
                        $(this).html(import_query_spec_qty_box.join("<br>"));
                    } else if ($(this).attr("data-display") == 'import_query_price') {
                        var import_query_price = [];
                        $('[name="import_query_price[]"]').each(function(){
                            import_query_price.push($(this).val());
                        });
                        $(this).html(import_query_price.join("<br>"));
                    } else if ($(this).attr("data-display") == 'import_query_price_tax') {
                        var import_query_price_tax = [];
                        $('[name="import_query_price_tax[]"]').each(function(){
                            import_query_price_tax.push($(this).val());
                        });
                        $(this).html(import_query_price_tax.join("<br>"));


                    } else if ($(this).attr("data-display") == 'import_query_item_no') {
                        var import_query_item_no = [];
                        $('[name="import_query_item_no[]"]').each(function(){
                            import_query_item_no.push($(this).val());
                        });
                        $(this).html(import_query_item_no.join("<br>"));
                    } else if ($(this).attr("data-display") == 'import_query_item_name') {
                        var import_query_item_name = [];
                        $('[name="import_query_item_name[]"]').each(function(){
                            import_query_item_name.push($(this).val());
                        });
                        $(this).html(import_query_item_name.join("<br>"));
                    } else if ($(this).attr("data-display") == 'import_query_temperature') {
                        var import_query_temperature = [];
                        $('[name="import_query_temperature[]"]').each(function(){
                            import_query_temperature.push($(this).val());
                        });
                        $(this).html(import_query_temperature.join("<br>"));
                    //
                    } else if ($(this).attr("data-display") == 'import_query_spec_type') {
                        var import_query_spec_type = [];
                        $('[name="import_query_spec_type[]"]').each(function(){
                            import_query_spec_type.push($(this).find('option:selected').text());
                        });
                        $(this).html(import_query_spec_type.join("<br>"));
                    } else if ($(this).attr("data-display") == 'import_query_spec_qc') {
                        var import_query_spec_qc = [];
                        $('[name="import_query_spec_qc[]"]').each(function(){
                            import_query_spec_qc.push($(this).find('option:selected').text());
                        });
                        $(this).html(import_query_spec_qc.join("<br>"));
                    } else if ($(this).attr("data-display") == 'import_query_spec_qc') {
                        var import_query_receive_date = [];
                        $('[name="import_query_receive_date[]"]').each(function(){
                            import_query_receive_date.push($(this).val());
                        });
                        $(this).html(import_query_receive_date.join("<br>"));
                    
                    }
                });*/
            }

            var handleTitle = function(tab, navigation, index) {
                var total = navigation.find('li').length;
                var current = index + 1;
                // set wizard title
                $('.step-title', $('#form_wizard_import_query')).text('步驟 ' + (index + 1) + ' / ' + total);
                // set done steps
                jQuery('li', $('#form_wizard_import_query')).removeClass("done");
                var li_list = navigation.find('li');
                for (var i = 0; i < index; i++) {
                    jQuery(li_list[i]).addClass("done");
                }

                if (current == 1) {
                    $('#form_wizard_import_query').find('.button-previous').hide();
                } else {
                    $('#form_wizard_import_query').find('.button-previous').show();
                }

                if (current >= total) {
                    $('#form_wizard_import_query').find('.button-next').hide();
                    $('#form_wizard_import_query').find('.button-submit').show();
                    displayConfirm();
                } else {
                    $('#form_wizard_import_query').find('.button-next').show();
                    $('#form_wizard_import_query').find('.button-submit').hide();
                }
                Metronic.scrollTo($('.page-title'));
            }

            // default form wizard
            $('#form_wizard_import_query').bootstrapWizard({
                'nextSelector': '.button-next',
                'previousSelector': '.button-previous',
                onTabClick: function (tab, navigation, index, clickedIndex) {
                    success.hide();
                    error.hide();
					
                    if (form.valid() == false) {
                        return false;
                    }
                    handleTitle(tab, navigation, clickedIndex);
                },
                onNext: function (tab, navigation, index) {
                    success.hide();
                    error.hide();
                    if (form.valid() == false) {
                        return false;
                    }

                    handleTitle(tab, navigation, index);
                },
                onPrevious: function (tab, navigation, index) {
                    success.hide();
                    error.hide();

                    handleTitle(tab, navigation, index);
                },
                onTabShow: function (tab, navigation, index) {
					//動態載入料品
					if(index == 2){
						get_item_id_import_query();
					}
					//動態載入料品
                    if(index == 3){
                        get_item_spec_import_query();
                    }
                    var total = navigation.find('li').length;
                    var current = index + 1;
                    var $percent = (current / total) * 100;
                    $('#form_wizard_import_query').find('.progress-bar').css({
                        width: $percent + '%'
                    });
                }
            });

            $('#form_wizard_import_query').find('.button-previous').hide();
			//暫存需求單
            $('#form_wizard_import_query .button-submit').click(function () {
				var act_arr = new Array();
				var act = $("#act").val();
				var act_temp = $("#act_temp").val();
				//判斷是否為第一筆資料
				if(act.length){
					act_arr = act.split(',');
				}
				//新增動作
				if(jQuery.inArray(act_temp, act_arr) == -1){
					act_arr.unshift(act_temp);
					//寫回資料
					var act_res = act_arr.join();
					$('#act').val(act_res);
					//將資料暫存到$_SESSION['quote']內
					save_temp_quote_import_query(act_temp);
				}
				$("#act_temp").val('');
				$('#'+act_temp).modal('hide');	
            }).hide();
        },
		//新增出庫需求
		quote_export: function () {
            if (!jQuery().bootstrapWizard) {
                return;
            }
			
            var form = $('#submit_quote_form_quote_export');
            var error = $('.alert-danger', form);
            var success = $('.alert-success', form);

            form.validate({
                doNotHideMessage: true, //this option enables to show the error/success messages on tab switch.
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
				ignore: [],  
                rules: {
					
					//新增需求單
                    quote_no: {
                        required: true
                    },
                    //選擇倉庫
                    quote_export_order_no: {
                        required: true
                    },
					quote_export_warehouse_id: {
                        required: true
                    }, 
					quote_export_reason: {
                        required: true
                    },
					quote_export_customer_id: {
                        required: true
                    }, 
					
					//選擇料品
                    quote_export_item_res: {
                        required: true,
						minlength: 1
                    },
                    
					'quote_export_spec_res[]': {
                        required: true,
						minlength: 1
                    },
                },

                messages: { // custom messages for radio buttons and checkboxes
                    'quote_export_spec_qty[]': {
						digits: "請輸入數字",
                        required: "請輸入收貨數量",
                    },
					"quote_no": {required: "報價單編號 無效"},
					"quote_export_order_no": {required: "出貨需求單編號 無效"},
					"quote_export_warehouse_id": {required: "請先選擇 倉庫"},
					"quote_export_supplier_id": {required: "請先選擇 供應商"},
					"quote_export_item_res": {required: "請先選擇 料品"},
                },

                errorPlacement: function (error, element) { // render error placement for each input type
                    /* if (element.attr("name") == "gender") { // for uniform radio buttons, insert the after the given container
                        error.insertAfter("#form_gender_error");
                    } else if (element.attr("name") == "payment[]") { // for uniform radio buttons, insert the after the given container
                        error.insertAfter("#form_payment_error");
                    } else {
                        error.insertAfter(element); // for other inputs, just perform default behavior
                    } */
					error.insertAfter(element); // for other inputs, just perform default behavior
                },

                invalidHandler: function (event, validator) { //display error alert on form submit   
                    success.hide();
                    error.show();
                    Metronic.scrollTo(error, -200);
                },

                highlight: function (element) { // hightlight error inputs
                    $(element)
                        .closest('.form-group').removeClass('has-success').addClass('has-error'); // set error class to the control group
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    $(element)
                        .closest('.form-group').removeClass('has-error'); // set error class to the control group
                },

                success: function (label) {
                    if (label.attr("for") == "gender" || label.attr("for") == "payment[]") { // for checkboxes and radio buttons, no need to show OK icon
                        label.closest('.form-group').removeClass('has-error').addClass('has-success');
                        label.remove(); // remove error label here
                    } else { // display success icon for other inputs
                        label.addClass('valid') // mark the current input as valid and display OK icon
                        .closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
                    }
                },

                submitHandler: function (form) {
                    success.show();
                    error.hide();
                    //add here some ajax code to submit your form or just call form.submit() if you want to submit the form without ajax
                }

            });

            /* var displayConfirm = function() {
                $('#tab4_quote_export .form-control-static', form).each(function(){
                    var input = $('[name="'+$(this).attr("data-display")+'"]', form);
                    if (input.is(":radio")) {
                        input = $('[name="'+$(this).attr("data-display")+'"]:checked', form);
                    }
                    if (input.is(":text") || input.is("textarea")) {
                        $(this).html(input.val());
                    } else if (input.is("select")) {
                        $(this).html(input.find('option:selected').text());
                    } else if (input.is(":radio") && input.is(":checked")) {
                        $(this).html(input.attr("data-title"));
                    } else if ($(this).attr("data-display") == 'quote_export_spec_qty') {
                        var quote_export_spec_qty = [];
                        $('[name="quote_export_spec_qty[]"]').each(function(){
                            quote_export_spec_qty.push($(this).val());
                        });
                        $(this).html(quote_export_spec_qty.join("<br>"));
					} else if ($(this).attr("data-display") == 'quote_export_item_no') {
                        var quote_export_item_no = [];
                        $('[name="quote_export_item_no[]"]').each(function(){
                            quote_export_item_no.push($(this).val());
                        });
                        $(this).html(quote_export_item_no.join("<br>"));
					} else if ($(this).attr("data-display") == 'quote_export_item_name') {
                        var quote_export_item_name = [];
                        $('[name="quote_export_item_name[]"]').each(function(){
                            quote_export_item_name.push($(this).val());
                        });
                        $(this).html(quote_export_item_name.join("<br>"));
					} else if ($(this).attr("data-display") == 'quote_export_temperature') {
                        var quote_export_temperature = [];
                        $('[name="quote_export_temperature[]"]').each(function(){
                            quote_export_temperature.push($(this).val());
                        });
                        $(this).html(quote_export_temperature.join("<br>"));
					//
					} else if ($(this).attr("data-display") == 'quote_export_spec_type') {
                        var quote_export_spec_type = [];
                        $('[name="quote_export_spec_type[]"]').each(function(){
                            quote_export_spec_type.push($(this).find('option:selected').text());
                        });
                        $(this).html(quote_export_spec_type.join("<br>"));
					} else if ($(this).attr("data-display") == 'quote_export_spec_qc') {
                        var quote_export_spec_qc = [];
                        $('[name="quote_export_spec_qc[]"]').each(function(){
                            quote_export_spec_qc.push($(this).find('option:selected').text());
                        });
                        $(this).html(quote_export_spec_qc.join("<br>"));
					
					
                    }
                });
            }
			 */
			//最後確認-預覽
            var displayConfirm = function() {
				//取得出貨料品名細
				var quote_export_spec_info = [];
				$('[name="quote_export_spec_info[]"]').each(function(){
					quote_export_spec_info.push(JSON.parse (decodeURIComponent($(this).val())));
				});
				// console.log(quote_export_spec_info);
				var data = '';
				for(var i = 0; i < quote_export_spec_info.length; i++){
					data = data + '<tr>';
					data = data + '<td>' + quote_export_spec_info[i]['cat_name'] + '</td>';
					data = data + '<td>' + quote_export_spec_info[i]['item_name'] + '</td>';
					data = data + '<td>' + quote_export_spec_info[i]['temperature_name'] + '</td>';
					data = data + '<td>' + quote_export_spec_info[i]['spec_type_name'] + '</td>';
					data = data + '<td>' + quote_export_spec_info[i]['date_limit'] + '</td>';
                    data = data + '<td>' + quote_export_spec_info[i]['price_tax'] + '</td>';
					data = data + '<td>' + quote_export_spec_info[i]['price'] + '</td>';
					data = data + '<td>' + quote_export_spec_info[i]['item_qty'] + '</td>';
					data = data + '</tr>';
				}
				$("#quote_export_display_data tbody").html(data);
				//console.log(quote_export_spec_info);
                $('#tab4_quote_export .form-control-static', form).each(function(){
                    var input = $('[name="'+$(this).attr("data-display")+'"]', form);
                    if (input.is(":radio")) {
                        input = $('[name="'+$(this).attr("data-display")+'"]:checked', form);
                    }
                    if (input.is(":text") || input.is("textarea")) {
                        $(this).html(input.val());
                    } else if (input.is("select")) {
                        $(this).html(input.find('option:selected').text());
                    } else if (input.is(":radio") && input.is(":checked")) {
                        $(this).html(input.attr("data-title"));
                    }
                });
            };
			
            var handleTitle = function(tab, navigation, index) {
                var total = navigation.find('li').length;
                var current = index + 1;
				//console.log('current='+current+', total='+total);
                // set wizard title
                $('.step-title', $('#form_wizard_quote_export')).text('步驟 ' + (index + 1) + ' / ' + total);
                // set done steps
                jQuery('li', $('#form_wizard_quote_export')).removeClass("done");
                var li_list = navigation.find('li');
                for (var i = 0; i < index; i++) {
                    jQuery(li_list[i]).addClass("done");
                }

                if (current == 1) {
                    $('#form_wizard_quote_export').find('.button-previous').hide();
                } else {
                    $('#form_wizard_quote_export').find('.button-previous').show();
                }

                if (current >= total) {
                    $('#form_wizard_quote_export').find('.button-next').hide();
                    $('#form_wizard_quote_export').find('.button-submit').show();
                    displayConfirm();
                } else {
                    $('#form_wizard_quote_export').find('.button-next').show();
                    $('#form_wizard_quote_export').find('.button-submit').hide();
                }
                Metronic.scrollTo($('.page-title'));
            }

            // default form wizard
            $('#form_wizard_quote_export').bootstrapWizard({
                'nextSelector': '.button-next',
                'previousSelector': '.button-previous',
                onTabClick: function (tab, navigation, index, clickedIndex) {
                    success.hide();
                    error.hide();
					
                    if (form.valid() == false) {
                        return false;
                    }
                    handleTitle(tab, navigation, clickedIndex);
                },
                onNext: function (tab, navigation, index) {
                    success.hide();
                    error.hide();
                    if (form.valid() == false) {
                        return false;
                    }

                    handleTitle(tab, navigation, index);
                },
                onPrevious: function (tab, navigation, index) {
                    success.hide();
                    error.hide();

                    handleTitle(tab, navigation, index);
                },
                onTabShow: function (tab, navigation, index) {
					//動態載入料品
					if(index == 2){
						get_item_id_quote_export();
					}
					
                    var total = navigation.find('li').length;
                    var current = index + 1;
                    var $percent = (current / total) * 100;
                    $('#form_wizard_quote_export').find('.progress-bar').css({
                        width: $percent + '%'
                    });
                }
            });

            $('#form_wizard_quote_export').find('.button-previous').hide();
			//暫存需求單
            $('#form_wizard_quote_export .button-submit').click(function () {
				var act_arr = new Array();
				var act = $("#act").val();
				var act_temp = $("#act_temp").val();
				//判斷是否為第一筆資料
				if(act.length){
					act_arr = act.split(',');
				}
				//新增動作
				if(jQuery.inArray(act_temp, act_arr) == -1){
					act_arr.unshift(act_temp);
					//寫回資料
					var act_res = act_arr.join();
					$('#act').val(act_res);
					//將資料暫存到$_SESSION['quote']內
					save_temp_quote_quote_export(act_temp);
				}
				$("#act_temp").val('');
				$('#'+act_temp).modal('hide');	
            }).hide();
        },
		//新增轉倉需求
		quotes_transfer: function () {
            if (!jQuery().bootstrapWizard) {
                return;
            }
			
			var form = $('#submit_quote_form_quotes_transfer');
            var error = $('.alert-danger', form);
            var success = $('.alert-success', form);

            form.validate({
                doNotHideMessage: true, //this option enables to show the error/success messages on tab switch.
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
				ignore: [],  
                rules: {
					//新增需求單
                    quote_no: {
                        required: true
                    },
                    //選擇倉庫
                    quotes_transfer_order_no: {
                        required: true
                    },
					quotes_transfer_reason: {
                        required: true
                    },
					quotes_transfer_warehouse_id: {
                        required: true
                    }, 
					quotes_transfer_supplier_id: {
                        required: true
                    }, 
					
                    //選擇料品
                    quotes_transfer_item_res: {
                        required: true,
						minlength: 1
                    },
                    
					'quotes_transfer_spec_res[]': {
                        required: true,
						minlength: 1
                    },
					
                },

                messages: { // custom messages for radio buttons and checkboxes
                    'quotes_transfer_spec_qty[]': {
						digits: "請輸入數字",
                        required: "請輸入收貨數量",
                    },
					"quote_no": {required: "報價單編號 無效"},
					"quotes_transfer_order_no": {required: "收貨需求單編號 無效"},
					"quotes_transfer_warehouse_id": {required: "請先選擇 倉庫"},
					"quotes_transfer_item_res": {required: "請先選擇 料品"},
                },

                errorPlacement: function (error, element) { // render error placement for each input type
                    /* if (element.attr("name") == "gender") { // for uniform radio buttons, insert the after the given container
                        error.insertAfter("#form_gender_error");
                    } else if (element.attr("name") == "payment[]") { // for uniform radio buttons, insert the after the given container
                        error.insertAfter("#form_payment_error");
                    } else {
                        error.insertAfter(element); // for other inputs, just perform default behavior
                    } */
					error.insertAfter(element); // for other inputs, just perform default behavior
                },

                invalidHandler: function (event, validator) { //display error alert on form submit   
                    success.hide();
                    error.show();
                    Metronic.scrollTo(error, -200);
                },

                highlight: function (element) { // hightlight error inputs
                    $(element)
                        .closest('.form-group').removeClass('has-success').addClass('has-error'); // set error class to the control group
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    $(element)
                        .closest('.form-group').removeClass('has-error'); // set error class to the control group
                },

                success: function (label) {
                    if (label.attr("for") == "gender" || label.attr("for") == "payment[]") { // for checkboxes and radio buttons, no need to show OK icon
                        label.closest('.form-group').removeClass('has-error').addClass('has-success');
                        label.remove(); // remove error label here
                    } else { // display success icon for other inputs
                        label.addClass('valid') // mark the current input as valid and display OK icon
                        .closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
                    }
                },

                submitHandler: function (form) {
                    success.show();
                    error.hide();
                    //add here some ajax code to submit your form or just call form.submit() if you want to submit the form without ajax
                }

            });
			//最後確認-預覽
            var displayConfirm = function() {
				//取得出貨料品名細
				var quotes_transfer_spec_info = [];
				$('[name="quotes_transfer_spec_info[]"]').each(function(){
					quotes_transfer_spec_info.push(JSON.parse (decodeURIComponent($(this).val())));
				});
				var data = '';
				for(var i = 0; i < quotes_transfer_spec_info.length; i++){
					data = data + '<tr>';
					data = data + '<td>' + quotes_transfer_spec_info[i]['warehouse_name'] + '</td>';
					data = data + '<td>' + quotes_transfer_spec_info[i]['cat_name'] + '</td>';
					data = data + '<td>' + quotes_transfer_spec_info[i]['item_name'] + '</td>';
					data = data + '<td>' + quotes_transfer_spec_info[i]['temperature_name'] + '</td>';
					data = data + '<td>' + quotes_transfer_spec_info[i]['spec_type_name'] + '</td>';
					data = data + '<td>' + quotes_transfer_spec_info[i]['date_limit'] + '</td>';
					data = data + '<td>' + quotes_transfer_spec_info[i]['price'] + '</td>';
					data = data + '<td>' + quotes_transfer_spec_info[i]['item_qty'] + '</td>';
					data = data + '</tr>';
				}
				$("#quotes_transfer_display_data tbody").html(data);
				//console.log(quotes_transfer_spec_info);
                $('#tab4_quotes_transfer .form-control-static', form).each(function(){
                    var input = $('[name="'+$(this).attr("data-display")+'"]', form);
                    if (input.is(":radio")) {
                        input = $('[name="'+$(this).attr("data-display")+'"]:checked', form);
                    }
                    if (input.is(":text") || input.is("textarea")) {
                        $(this).html(input.val());
                    } else if (input.is("select")) {
                        $(this).html(input.find('option:selected').text());
                    } else if (input.is(":radio") && input.is(":checked")) {
                        $(this).html(input.attr("data-title"));
                    }
                });
            };
			
            var handleTitle = function(tab, navigation, index) {
                var total = navigation.find('li').length;
                var current = index + 1;
                // set wizard title
                $('.step-title', $('#form_wizard_quotes_transfer')).text('步驟 ' + (index + 1) + ' / ' + total);
                // set done steps
                jQuery('li', $('#form_wizard_quotes_transfer')).removeClass("done");
                var li_list = navigation.find('li');
                for (var i = 0; i < index; i++) {
                    jQuery(li_list[i]).addClass("done");
                }

                if (current == 1) {
                    $('#form_wizard_quotes_transfer').find('.button-previous').hide();
                } else {
                    $('#form_wizard_quotes_transfer').find('.button-previous').show();
                }

                if (current >= total) {
                    $('#form_wizard_quotes_transfer').find('.button-next').hide();
                    $('#form_wizard_quotes_transfer').find('.button-submit').show();
                    displayConfirm();
                } else {
                    $('#form_wizard_quotes_transfer').find('.button-next').show();
                    $('#form_wizard_quotes_transfer').find('.button-submit').hide();
                }
                Metronic.scrollTo($('.page-title'));
            }

            // default form wizard
            $('#form_wizard_quotes_transfer').bootstrapWizard({
                'nextSelector': '.button-next',
                'previousSelector': '.button-previous',
                onTabClick: function (tab, navigation, index, clickedIndex) {
                    success.hide();
                    error.hide();
					
                    if (form.valid() == false) {
                        return false;
                    }
                    handleTitle(tab, navigation, clickedIndex);
                },
                onNext: function (tab, navigation, index) {
                    success.hide();
                    error.hide();
                    if (form.valid() == false) {
                        return false;
                    }

                    handleTitle(tab, navigation, index);
                },
                onPrevious: function (tab, navigation, index) {
                    success.hide();
                    error.hide();

                    handleTitle(tab, navigation, index);
                },
                onTabShow: function (tab, navigation, index) {
					//動態載入料品
					if(index == 2){
						get_item_id_quotes_transfer();
					}
					
                    var total = navigation.find('li').length;
                    var current = index + 1;
                    var $percent = (current / total) * 100;
                    $('#form_wizard_quotes_transfer').find('.progress-bar').css({
                        width: $percent + '%'
                    });
                }
            });

            $('#form_wizard_quotes_transfer').find('.button-previous').hide();
			//暫存需求單
            $('#form_wizard_quotes_transfer .button-submit').click(function () {
				var act_arr = new Array();
				var act = $("#act").val();
				var act_temp = $("#act_temp").val();
				//判斷是否為第一筆資料
				if(act.length){
					act_arr = act.split(',');
				}
				//新增動作
				if(jQuery.inArray(act_temp, act_arr) == -1){
					act_arr.unshift(act_temp);
					//寫回資料
					var act_res = act_arr.join();
					$('#act').val(act_res);
					//將資料暫存到$_SESSION['quote']內
					save_temp_quote_quotes_transfer(act_temp);
				}
				$("#act_temp").val('');
				$('#'+act_temp).modal('hide');	
            }).hide();
        },

        //新增退倉需求
        quotes_withdraw: function () {
            if (!jQuery().bootstrapWizard) {
                return;
            }
            
            var form = $('#submit_quote_form_quotes_withdraw');
            var error = $('.alert-danger', form);
            var success = $('.alert-success', form);

            form.validate({
                doNotHideMessage: true, //this option enables to show the error/success messages on tab switch.
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: [],  
                rules: {
                    //新增需求單
                    quote_no: {
                        required: true
                    },
                    //選擇倉庫
                    quotes_withdraw_order_no: {
                        required: true
                    },
                    quotes_withdraw_reason: {
                        required: true
                    },
                    quotes_withdraw_receive_date: {
                        required: true
                    }, 
                    quotes_withdraw_receive_type: {
                        required: true
                    },
                    quotes_withdraw_warehouse_id: {
                        required: true
                    }, 
                    country_id: {
                        required: true
                    }, 
                    postcode: {
                        required: true
                    }, 
                    address: {
                        required: true
                    }
                },

                messages: { // custom messages for radio buttons and checkboxes
                    "quote_no": {required: "報價單編號 無效"},
                    "quotes_withdraw_order_no": {required: "退倉需求單編號 無效"},
                    "quotes_withdraw_warehouse_id": {required: "請先選擇 倉庫"},
                },

                errorPlacement: function (error, element) { // render error placement for each input type
                    /* if (element.attr("name") == "gender") { // for uniform radio buttons, insert the after the given container
                        error.insertAfter("#form_gender_error");
                    } else if (element.attr("name") == "payment[]") { // for uniform radio buttons, insert the after the given container
                        error.insertAfter("#form_payment_error");
                    } else {
                        error.insertAfter(element); // for other inputs, just perform default behavior
                    } */
                    error.insertAfter(element); // for other inputs, just perform default behavior
                },

                invalidHandler: function (event, validator) { //display error alert on form submit   
                    success.hide();
                    error.show();
                    Metronic.scrollTo(error, -200);
                },

                highlight: function (element) { // hightlight error inputs
                    $(element)
                        .closest('.form-group').removeClass('has-success').addClass('has-error'); // set error class to the control group
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    $(element)
                        .closest('.form-group').removeClass('has-error'); // set error class to the control group
                },

                success: function (label) {
                    if (label.attr("for") == "gender" || label.attr("for") == "payment[]") { // for checkboxes and radio buttons, no need to show OK icon
                        label.closest('.form-group').removeClass('has-error').addClass('has-success');
                        label.remove(); // remove error label here
                    } else { // display success icon for other inputs
                        label.addClass('valid') // mark the current input as valid and display OK icon
                        .closest('.form-group').removeClass('has-error').addClass('has-success'); // set success class to the control group
                    }
                },

                submitHandler: function (form) {
                    success.show();
                    error.hide();
                    //add here some ajax code to submit your form or just call form.submit() if you want to submit the form without ajax
                }

            });
            //最後確認-預覽
            var displayConfirm = function() {
                //取得退倉料品名細
                var quotes_withdraw_spec_info = [];
                $('[name="quotes_withdraw_spec_info[]"]').each(function(){
                    quotes_withdraw_spec_info.push(JSON.parse (decodeURIComponent($(this).val())));
                });
                var data = '';
                for(var i = 0; i < quotes_withdraw_spec_info.length; i++){
                    data = data + '<tr>';
                    data = data + '<td>' + quotes_withdraw_spec_info[i]['warehouse_name'] + '</td>';
                    data = data + '<td>' + quotes_withdraw_spec_info[i]['cat_name'] + '</td>';
                    data = data + '<td>' + quotes_withdraw_spec_info[i]['item_name'] + '</td>';
                    data = data + '<td>' + quotes_withdraw_spec_info[i]['temperature_name'] + '</td>';
                    data = data + '<td>' + quotes_withdraw_spec_info[i]['spec_type_name'] + '</td>';
                    data = data + '<td>' + quotes_withdraw_spec_info[i]['date_limit'] + '</td>';
                    data = data + '<td>' + quotes_withdraw_spec_info[i]['price'] + '</td>';
                    data = data + '<td>' + quotes_withdraw_spec_info[i]['item_qty'] + '</td>';
                    data = data + '</tr>';
                }
                $("#quotes_withdraw_display_data tbody").html(data);
                //console.log(quotes_withdraw_spec_info);
                $('#tab4_quotes_withdraw .form-control-static', form).each(function(){
                    var input = $('[name="'+$(this).attr("data-display")+'"]', form);
                    if (input.is(":radio")) {
                        input = $('[name="'+$(this).attr("data-display")+'"]:checked', form);
                    }
                    if (input.is(":text") || input.is("textarea")) {
                        $(this).html(input.val());
                    } else if (input.is("select") && input.find('option:selected').val() > 0) {
                        $(this).html(input.find('option:selected').text());
                    } else if (input.is(":radio") && input.is(":checked")) {
                        $(this).html(input.attr("data-title"));
                    }
                });
            };
            
            var handleTitle = function(tab, navigation, index) {
                var total = navigation.find('li').length;
                var current = index + 1;
                // set wizard title
                $('.step-title', $('#form_wizard_quotes_withdraw')).text('步驟 ' + (index + 1) + ' / ' + total);
                // set done steps
                jQuery('li', $('#form_wizard_quotes_withdraw')).removeClass("done");
                var li_list = navigation.find('li');
                for (var i = 0; i < index; i++) {
                    jQuery(li_list[i]).addClass("done");
                }

                if (current == 1) {
                    $('#form_wizard_quotes_withdraw').find('.button-previous').hide();
                } else {
                    $('#form_wizard_quotes_withdraw').find('.button-previous').show();
                }

                if (current >= total) {
                    $('#form_wizard_quotes_withdraw').find('.button-next').hide();
                    $('#form_wizard_quotes_withdraw').find('.button-submit').show();
                    displayConfirm();
                } else {
                    $('#form_wizard_quotes_withdraw').find('.button-next').show();
                    $('#form_wizard_quotes_withdraw').find('.button-submit').hide();
                }
                Metronic.scrollTo($('.page-title'));
            }

            // default form wizard
            $('#form_wizard_quotes_withdraw').bootstrapWizard({
                'nextSelector': '.button-next',
                'previousSelector': '.button-previous',
                onTabClick: function (tab, navigation, index, clickedIndex) {
                    success.hide();
                    error.hide();
                    
                    if (form.valid() == false) {
                        return false;
                    }
                    handleTitle(tab, navigation, clickedIndex);
                },
                onNext: function (tab, navigation, index) {
                    success.hide();
                    error.hide();
                    if (form.valid() == false) {
                        return false;
                    }

                    handleTitle(tab, navigation, index);
                },
                onPrevious: function (tab, navigation, index) {
                    success.hide();
                    error.hide();

                    handleTitle(tab, navigation, index);
                },
                onTabShow: function (tab, navigation, index) {
                    //動態載入料品
                    if(index == 1){
                        get_item_id_quotes_withdraw();
                    }
                    
                    var total = navigation.find('li').length;
                    var current = index + 1;
                    var $percent = (current / total) * 100;
                    $('#form_wizard_quotes_withdraw').find('.progress-bar').css({
                        width: $percent + '%'
                    });
                }
            });

            $('#form_wizard_quotes_withdraw').find('.button-previous').hide();
            //暫存需求單
            $('#form_wizard_quotes_withdraw .button-submit').click(function () {
                var act_arr = new Array();
                var act = $("#act").val();
                var act_temp = $("#act_temp").val();
                //判斷是否為第一筆資料
                if(act.length){
                    act_arr = act.split(',');
                }
                //新增動作
                if(jQuery.inArray(act_temp, act_arr) == -1){
                    act_arr.unshift(act_temp);
                    //寫回資料
                    var act_res = act_arr.join();
                    $('#act').val(act_res);
                    //將資料暫存到$_SESSION['quote']內
                    save_temp_quote_quotes_withdraw(act_temp);
                }
                $("#act_temp").val('');
                $('#'+act_temp).modal('hide');  
            }).hide();
        }
    };

}();