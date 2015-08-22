var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 | use ssh $ gulb to rebuild the css/js
 */
var bootstrapCss = [
    'bootstrap.min.css',
    'bootstrap-switch.min.css',
    'bootstrap-select.min.css',
    'font-awesome.min.css',
    // 'dataTables.bootstrap.css',
    'datatables.css',
    'simple-line-icons.min.css'
];

var layoutCss = [
    'layout.css',
    'default.css'
];

var pluginCss = [
	'plugins.css',
	'datepicker.css',
	'select2.css',
	'jquery.loadmask.css',
	'uniform.default.css',
	'typeahead.css',
	'components.css'
];

var jqueryJs = [
	'jquery-1.11.0.min.js',
	'jquery-ui-1.10.3.custom.min.js',
	'jquery-migrate-1.2.1.min.js',
	'jquery.slimscroll.min.js',
	'jquery.blockui.min.js',
	'jquery.cokie.min.js',
	'jquery.uniform.min.js',
	'jquery.loadmask.min.js',
	'jquery.validate.min.js',
	'jquery.multi-select.js',
	'jquery.dataTables.js'
];

var bootstrapJs = [
	'bootstrap.min.js',
	'bootstrap-hover-dropdown.min.js',
	'bootstrap-switch.min.js',
	'bootstrap-select.min.js',
	'bootstrap-datepicker.js',
	'metronic.js',
	'layout.js',
	'quick-sidebar.js',
	// 'dataTables.bootstrap.js'
	'datatables.js'
];

var pluginJs = [
	'select2.min.js',
	'additional-methods.min.js',
	'handlebars.min.js',
	'typeahead.bundle.min.js',
	'bootbox.min.js',				/*刪除跳出詢問視窗*/
	'address_data.js',				/*地址選單*/
	'items_data.js'					/*自動完成INPUT TEXT框內文字*/
];
elixir(function(mix) {
    mix
        .styles(layoutCss, 'public/css/layout.all.css')
        .styles(bootstrapCss, 'public/css/bootstrap.all.css')
        .styles(pluginCss, 'public/css/plugin.all.css')
        .scripts(jqueryJs, 'public/js/jquery.all.js')
        .scripts(bootstrapJs, 'public/js/bootstrap.all.js')
        .scripts(pluginJs, 'public/js/plugin.all.js')
        .version([
        	'css/layout.all.css', 
        	'css/bootstrap.all.css', 
        	'css/plugin.all.css',
        	'js/jquery.all.js',
        	'js/bootstrap.all.js',
        	'js/plugin.all.js'
        ]);
});