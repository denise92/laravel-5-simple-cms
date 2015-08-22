<div class="page-header navbar navbar-fixed-top"> 
    <!-- BEGIN HEADER INNER -->
    <div class="page-header-inner"> 
        <!-- BEGIN LOGO -->
        <div class="page-logo"> <a href="{{ url('/admin') }}"> <img src="/images/logo.png" alt="logo" class="logo-default"/> </a>
          <div class="menu-toggler sidebar-toggler hide"> 
            <!-- DOC: Remove the above "hide" to enable the sidebar toggler button on header --> 
          </div>
        </div>
        <!-- END LOGO --> 
        <!-- BEGIN RESPONSIVE MENU TOGGLER --> 
        <a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse"> </a> 
        <!-- END RESPONSIVE MENU TOGGLER --> 
        <!-- BEGIN TOP NAVIGATION MENU (上方右側選單)-->
        <div class="top-menu">
          <ul class="nav navbar-nav pull-right">
            <!-- BEGIN USER LOGIN DROPDOWN (使用者與其下拉選單)-->
            <li class="dropdown dropdown-user">
                <a href="#{{Auth::user()->id}}" class="dropdown-toggle" data-toggle="dropdown" data-click="dropdown" data-close-others="true">
                    <span class="username"> {{ Auth::user()->name  }} </span> 
                    <i class="fa fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                 @include('partials.common.languages', ['languages' => Config::get('languages'), 'route' => 'admin.language.change' ])
                            </div>
                        </div>
                        <div class="pull-left">
                            <a href="{{ route('admin.user.edit', ['id' => Auth::user()->id])  }}" class="btn btn-default btn-flat">{{ trans('admin.profile') }}</a>
                        </div>
                        <div class="pull-right">
                            <a href="{{ route('auth.logout') }}" class="btn btn-default btn-flat">{{ trans('auth.user.logout') }}</a>
                        </div>
                    </li>
                </ul>
            </li>
            <!-- END USER LOGIN DROPDOWN (使用者與其下拉選單)--> 
            
            
          </ul>
        </div>
        <!-- END TOP NAVIGATION MENU 上方右側選單)--> 
    </div>
    <!-- END HEADER INNER --> 
</div>