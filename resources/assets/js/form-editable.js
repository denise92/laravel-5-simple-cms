var FormEditable = function () {

    $.mockjaxSettings.responseTime = 500;

    var log = function (settings, response) {
        var s = [], str;
        s.push(settings.type.toUpperCase() + ' url = "' + settings.url + '"');
        for (var a in settings.data) {
            if (settings.data[a] && typeof settings.data[a] === 'object') {
                str = [];
                for (var j in settings.data[a]) {
                    str.push(j + ': "' + settings.data[a][j] + '"');
                }
                str = '{ ' + str.join(', ') + ' }';
            } else {
                str = '"' + settings.data[a] + '"';
            }
            s.push(a + ' = ' + str);
        }
        s.push('RESPONSE: status = ' + response.status);
        if (response.responseText) {
            if ($.isArray(response.responseText)) {
                s.push('[');
                $.each(response.responseText, function (i, v) {
                    s.push('{value: ' + v.value + ', text: "' + v.text + '"}');
                });
                s.push(']');
				
            } else {
                s.push($.trim(response.responseText));
            }
        }
        s.push('--------------------------------------\n');
        $('#console').val(s.join('\n') + $('#console').val());
    }

    var initAjaxMock = function () {
        //ajax mocks
        $.mockjax({
            url: '/post',
            response: function (settings) {
				//log(settings, this);
                var s = [], str;
				for (var a in settings.data) {
					if (settings.data[a] && typeof settings.data[a] === 'object') {
						str = [];
						for (var j in settings.data[a]) {
							str.push(j + ': "' + settings.data[a][j] + '"');
						}
						str = '{ ' + str.join(', ') + ' }';
					} else {
						//str = "'" + settings.data[a] + "'";
						str = settings.data[a];
					}
					if(a == 'name'){
						var cat_idname = str;
					}
					if(a == 'value'){
						var cat_name = str;
					}
					if(a == 'pk'){
						var customer_id = str;
					}
				}
				var inputs={
					cat_idname:cat_idname,
					cat_name:cat_name,
					customer_id:customer_id,
					act:"edit_cat",
				};
				$.post('api.php?req=warehouse.items_api',inputs,function(data){
					if(data['status']=='success'){
						//alert('修改完成');
						//console.log(data['response']);
					}else{
						alert(data['response']);
					}
				},'json');
            }
        });
		
		$.mockjax({
            url: '/placement',
            response: function (settings) {
				//log(settings, this);
                var s = [], str;
				for (var a in settings.data) {
					if (settings.data[a] && typeof settings.data[a] === 'object') {
						str = [];
						for (var j in settings.data[a]) {
							str.push(j + ': "' + settings.data[a][j] + '"');
						}
						str = '{ ' + str.join(', ') + ' }';
					} else {
						//str = "'" + settings.data[a] + "'";
						str = settings.data[a];
					}
					if(a == 'name'){
						var cat_idname = str;
					}
					if(a == 'value'){
						var cat_name = str;
					}
				}
				var inputs={
					cat_idname:cat_idname,
					cat_name:cat_name,
					act:"edit_placement_cat",
				};
				$.post('api.php?req=warehouse.placement_api',inputs,function(data){
					if(data['status']=='success'){
						//alert('修改完成');
					}else{
						alert(data['response']);
					}
				},'json');
            }
        });
    }

    var initEditables = function () {
		$.fn.editable.defaults.mode = 'inline';
        
        //global settings 
        $.fn.editable.defaults.inputclass = 'form-control';
        $.fn.editable.defaults.url = '/post';

        //editables element samples 
		/* $('#cat_name_1').editable({
			url: '/post',
			type: 'text',
			pk: 1,
			name: 'cat_name_1',
			validate: function (value) {
				if ($.trim(value) == '') return '料品類別不得為空';
			}
		}); */
		
    }

    return {
        //main function to initiate the module
        init: function () {
            // inii ajax simulation
            initAjaxMock();

            // init editable elements
            initEditables();

            // handle editable elements on hidden event fired
            var $next = $(this).closest('tr').next().find('.editable');
            $next.focus();
        }
    };

}();