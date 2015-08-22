<?php

namespace App\Providers;

use Illuminate\Routing\Router;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to the controller routes in your routes file.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'App\Http\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @param  \Illuminate\Routing\Router  $router
     * @return void
     */
    public function boot(Router $router)
    {
        
        // bind language
        $router->model('language', 'App\Language');
        $router->bind('admin.language', function($id)
        {
            return \App\Language::findOrFail($id);
        });
        
        // bind setting
        $router->model('setting', 'App\Setting');
        $router->bind('admin.setting', function($id)
        {
            return \App\Setting::findOrFail($id);
        });

        // bind user
        $router->model('user', 'App\User');
        $router->bind('admin.user', function($id)
        {
            return \App\User::findOrFail($id);
        });

        // bind company
        $router->model('company', 'App\Company');
        $router->bind('admin.company', function($id)
        {
            return \App\Company::findOrFail($id);
        });

        // bind group
        $router->model('group', 'App\Group');
        $router->bind('admin.group', function($id)
        {
            return \App\Group::findOrFail($id);
        });
        
        parent::boot($router);
    }

    /**
     * Define the routes for the application.
     *
     * @param  \Illuminate\Routing\Router  $router
     * @return void
     */
    public function map(Router $router)
    {
        $router->group(['namespace' => $this->namespace], function ($router) {
            require app_path('Http/routes.php');
        });
    }
}
