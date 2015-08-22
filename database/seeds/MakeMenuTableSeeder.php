<?php

use Illuminate\Database\Seeder;
use App\MakeMenu as Menu;

class MakeMenuTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('menus')->delete();
        Menu::create([
            'id'        => '1',
            'parent_id' => '0',
            'code'      => 'admin.dashboard.root', 
            'title'     => 'admin.menu.dashboard', 
            'icon'      => 'dashboard',
            'route'     => '#',
            'disp_sort' => '1',
            
        ]);
        Menu::create([
            'id'        => '2',
            'parent_id' => '0',
            'code'      => 'admin.user.root', 
            'title'     => 'admin.menu.user.root', 
            'icon'      => 'users',
            'route'     => '#',
            'disp_sort' => '2',
            
        ]);
        Menu::create([
            'id'        => '3',
            'parent_id' => '0',
            'code'      => 'admin.setting.root', 
            'title'     => 'admin.menu.setting.all', 
            'icon'      => 'gears',
            'route'     => '#',
            'disp_sort' => '3',
            
        ]);
        Menu::create([
            'id'        => '4',
            'parent_id' => '2',
            'code'      => 'admin.user.index', 
            'title'     => 'admin.menu.user.all', 
            'icon'      => 'circle-o',
            'disp_sort' => '1',
            
        ]);
        Menu::create([
            'id'        => '5',
            'parent_id' => '2',
            'code'      => 'admin.company.index', 
            'title'     => 'admin.menu.company.all', 
            'icon'      => 'circle-o',
            'disp_sort' => '2',
            
        ]);
        Menu::create([
            'id'        => '6',
            'parent_id' => '2',
            'code'      => 'admin.group.index', 
            'title'     => 'admin.menu.group.all', 
            'icon'      => 'circle-o',
            'disp_sort' => '3',
            
        ]);

        Menu::create([
            'id'        => '7',
            'parent_id' => '3',
            'code'      => 'admin.setting.menu', 
            'title'     => 'admin.menu.manage', 
            'icon'      => 'circle-o',
            'disp_sort' => '1',
            
        ]);
        Menu::create([
            'id'        => '8',
            'parent_id' => '3',
            'code'      => 'admin.language.index', 
            'title'     => 'admin.menu.language.all', 
            'icon'      => 'circle-o',
            'disp_sort' => '2',
            
        ]);
        Menu::create([
            'id'        => '9',
            'parent_id' => '3',
            'code'      => 'admin.setting.index', 
            'title'     => 'admin.menu.setting', 
            'icon'      => 'circle-o',
            'disp_sort' => '3',
            
        ]);
    }
}
