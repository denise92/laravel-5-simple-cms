 <!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<head>
<!--<![endif]-->
<!-- BEGIN HEAD -->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="_token" content="{{ csrf_token() }}" />
    <meta content="" name="description"/>
    <meta content="" name="author"/>
    <title> {{  trans(Route::getCurrentRoute()->getName()) . ' | ' .  trans('admin.title')  }} </title>
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <link rel="shortcut icon" href="/images/favicon.ico"/>
    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" href="{{ elixir('css/bootstrap.all.css') }}" >
    <link rel="stylesheet" href="{{ elixir('css/layout.all.css') }}" >
    <link rel="stylesheet" href="{{ elixir('css/plugin.all.css') }}" >
    <!-- END GLOBAL MANDATORY STYLES -->
    <!-- BEGIN CORE PLUGINS --> 
    <!--[if lt IE 9]>
    <script src="../../assets/global/plugins/respond.min.js"></script>
    <script src="../../assets/global/plugins/excanvas.min.js"></script> 
    <![endif]--> 
    <script src="{{ elixir('js/jquery.all.js') }}" type="text/javascript"></script>
    <script src="{{ elixir('js/bootstrap.all.js') }}" type="text/javascript"></script>
    <script src="{{ elixir('js/plugin.all.js') }}" type="text/javascript"></script>
    <script>
        jQuery(document).ready(function() {    
            Metronic.init(); // init metronic core componets
            Layout.init(); // init layout
            QuickSidebar.init() // init quick sidebar

        });

        // location push state
        /*function pushState(url, title) {
            //if(!window.ajaxUrl.no_push_state) {
                if (window.history.pushState) {
                    window.history.pushState(null, title, url);
                } else {
                    window.location.hash = url;
                }
            //}
        }*/

    </script> 
</head>
<!-- END HEAD -->
<body class="page-header-fixed page-quick-sidebar-over-content">

<!-- BEGIN HEADER -->
@include('partials.admin.top')
<!-- END HEADER -->
<div class="clearfix"> </div>
<!-- BEGIN CONTAINER -->
<div class="page-container"> 
    <!-- BEGIN SIDEBAR -->
    @include('partials.admin.sidebar')
    <!-- END SIDEBAR --> 
    <!-- BEGIN CONTENT -->
    <div class="page-content-wrapper">
        <div class="page-content" id='page_content'> 
            <!-- BEGIN PAGE HEADER(標題+路徑)-->
            @include('partials.admin.header')
            <!-- END PAGE HEADER (標題+路徑)--> 
            <section class="content">
                @if($errors->any())
                    <div class="alert alert-danger">{{$errors->first()}}</div>
                @endif
                @yield('content')
            </section>
        </div>
    </div>
    <!-- END CONTENT --> 

</div>
<!-- END CONTAINER --> 

<!-- BEGIN FOOTER -->
<div class="page-footer">
    @include('partials.admin.footer')
</div>
<!-- END FOOTER --> 

</body>
</html>