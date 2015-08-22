<?php

namespace App\Http\Middleware;

use Closure;
use Menu;
use Session;
use Auth;
use App\User;
// use Bican\Roles\Models\Role;


class MakeMenu
{
    /**
     * Set menus in middleware as sessions are not stored already in service providers instead
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $this->makeAdminMenu();
        return $next($request);
    }

    private function makeAdminMenu()
    {
        Menu::make('admin', function($menu) {
            
            $dashboard = $menu->add(trans('admin.menu.dashboard'), ['route' => 'admin.root'])
                ->icon('dashboard')
                ->prependIcon();

            $language  = $menu->add(trans('admin.menu.language.root'), '#')
                ->icon('flag')
                ->data('permission', 'admin')
                ->prependIcon();
            
            $language->add(trans('admin.menu.language.all'), ['route' => 'admin.language.index'])
                ->icon('circle-o')
                ->prependIcon();
            $users = $menu->add(trans('admin.menu.user.root'), '#')
                ->icon('users')
                ->prependIcon();
            $users->add(trans('admin.menu.user.all'), ['route' => 'admin.user.index'])
                ->icon('circle-o')
                ->prependIcon();
            $users->add(trans('admin.menu.company.all'), ['route' => 'admin.company.index'])
                ->icon('circle-o')
                ->prependIcon();
            $users->add(trans('admin.menu.group.all'), ['route' => 'admin.group.index'])
                ->icon('circle-o')
                ->prependIcon();
            /*

            $settings = $menu->add(trans('admin.menu.setting'), ['route' => 'admin.setting.index'])
                ->icon('gears')
                ->prependIcon();
            */
            $settings  = $menu->add(trans('admin.menu.setting'), '#')
                ->icon('gears')
                ->data('permission', 'admin')
                ->prependIcon();
            $settings->add(trans('admin.menu.setting'), ['route' => 'admin.setting.index'])
                ->icon('circle-o')
                ->prependIcon();
        })
        ->filter(function($item){
            
            if(empty($item->data('permission'))){
                return true;
            }
            else{
                $user = User::find(Auth::id());
                if(Auth::id() && $user->is($item->data('permission'))){
                    return true;
                }
                /*echo "<br />permission=".$item->data('permission');
                echo "<br />is admin=".$user->is('admin');
                exit;
                    */
                return false;
            }
        });
    }
}
