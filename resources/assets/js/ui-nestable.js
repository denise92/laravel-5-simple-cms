var UINestable = function () {

    var updateOutput = function (e) {
        var list = e.length ? e : $(e.target),output = list.data('output');
        if (window.JSON) {
            output.val(window.JSON.stringify(list.nestable('serialize'))); //, null, 2));
        } else {
            output.val('JSON browser support required for this demo.');
        }
    };


    return {
        //main function to initiate the module
        init: function () {
			// activate Nestable for /pages/adm/adm_resource_inquire.php
            $('#resource_list').nestable({group: 1}).on('change', updateOutput);
			
            // output initial serialised data
			updateOutput($('#resource_list').data('output', $('#resource_list_output')));

            $('#nestable_list_menu').on('click', function (e) {
                var target = $(e.target),
                    action = target.data('action');
                if (action === 'expand-all') {
                    $('.dd').nestable('expandAll');
                }
                if (action === 'collapse-all') {
                    $('.dd').nestable('collapseAll');
                }
            });

            //$('#nestable_list_3').nestable();

        }

    };

}();