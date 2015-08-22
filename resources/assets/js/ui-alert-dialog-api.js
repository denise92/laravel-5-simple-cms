var UIAlertDialogApi = function () {

    var handleDialogs = function() {

        $('#demo_1').click(function(){
                window.open(' create_placement_iframe.html ', '', config='height=500px,width=1020px');    
            });
            //end #demo_1:供應商的新增儲位資料

            $('#demo_2').click(function(){
                window.open(' material_name_iframe.html ', '', config='height=500px,width=1020px');    
            });
            //end #demo_2:料品各國名
        
            $('#demo_3').click(function(){
               window.open(' create_supplier_iframe.html  ', '', config='height=500px,width=1020px');  
            });
            //end #demo_3

            $('#demo_4').click(function(){
               window.open(' create_material_iframe.html  ', '', config='height=500px,width=1020px');  
            });
            //end #demo_4:供應商的新增料品資料
			
			$('.demo_5').click(function(){
               window.open(' inquire_out_revise_iframe.html  ', '', config='height=500px,width=1020px');  
            });
            //end #demo_5:出庫單查詢內的供應商資料
			
			$('.demo_6').click(function(){
               window.open(' inquire_inventory_iframe.html  ', '', config='height=500px,width=1020px');  
            });
            //end #demo_6:庫存查詢_只打料品ID或料品品品名後的詳細頁
			
			$('.demo_7').click(function(){
               window.open(' inquire_inventory_iframe2.html  ', '', config='height=500px,width=1020px');  
            });
            //end #demo_7:庫存查詢_只打倉庫ID或倉庫名後的詳細頁
			
			$('.demo_8').click(function(){
               window.open(' inquire_inventory_iframe3.html  ', '', config='height=500px,width=1020px');  
            });
            //end #demo_8:庫存查詢_只打倉庫ID或倉庫名後的詳細頁
			
			$('.demo_9').click(function(){
                window.open(' inquire_receipt_revise_iframe.html  ', '', config='height=500px,width=1020px');  
            });
            //end .demo_9:收貨單查詢內的入庫單
			
			$('.demo_10').click(function(){
                window.open(' purchasing_receipt_iframe.html  ', '', config='height=700px,width=1220px');  
            });
            //end .demo_10:採購單入庫的等待收穫內的新增入庫單
			
			$('.demo_11').click(function(){
                window.open(' purchasing_receipt2_iframe.html  ', '', config='height=700px,width=1220px');  
            });
            //end .demo_11:採購單入庫的收貨不完整內的新增入庫單
			
			$('.demo_12').click(function(){
                window.open(' inquire_in_revise_iframe.html ', '', config='height=700px,width=1020px');  
            });
            //end .demo_12:入庫單查詢內的入庫單
			
			
			$('#demo_13').click(function(){
                window.open(' assign_staff.html ', '', config='height=700px,width=1020px');  
            });
            //end #demo_13:儲位管理的指定管理員
			
			$('#demo_14').click(function(){
                window.open(' create_out_p.html ', '', config='height=700px,width=1020px');  
            });
            //end #demo_14:新增出庫單的新增料品的確認
			
			$('.demo_15').click(function(){
                window.open(' inquire_out_get.html ', '', config='height=700px,width=1020px');  
            });
            //end .demo_15:出庫單查詢的領貨單
			
			$('.demo_16').click(function(){
                window.open(' inquire_turn_iframe.html', '', config='height=700px,width=1020px');  
            });
            //end .demo_16:轉倉單查詢的領貨單
			
			$('#demo_17').click(function(){
                window.open(' create_turn_iframe.html', '', config='height=700px,width=1020px');  
            });
            //end #demo_17:新增轉倉單的確認
			
			
			$('#to_delete').click(function(){
                bootbox.confirm("你確定要刪除此筆資料嗎?", function(result) {
                   alert("Confirm result: "+result);
                }); 
            });
            //end #to_delete
			
			


    }

    var handleAlerts = function() {
        
        $('#alert_show').click(function(){

            Metronic.alert({
                container: $('#alert_container').val(), // alerts parent container(by default placed after the page breadcrumbs)
                place: $('#alert_place').val(), // append or prepent in container 
                type: $('#alert_type').val(),  // alert's type
                message: $('#alert_message').val(),  // alert's message
                close: $('#alert_close').is(":checked"), // make alert closable
                reset: $('#alert_reset').is(":checked"), // close all previouse alerts first
                focus: $('#alert_focus').is(":checked"), // auto scroll to the alert after shown
                closeInSeconds: $('#alert_close_in_seconds').val(), // auto close after defined seconds
                icon: $('#alert_icon').val() // put icon before the message
            });

        });

    }

    return {

        //main function to initiate the module
        init: function () {
            handleDialogs();
            handleAlerts();
        }
    };

}();