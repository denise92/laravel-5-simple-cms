<?php

use Illuminate\Database\Seeder;
use App\User as User;
use Illuminate\Support\Facades\Hash;
use Laracasts\TestDummy\Factory as TestDummy;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();
        User::create([
        	'name' => 'Admin', 
        	'email' => 'admin@admin.com', 
            // 'password' => Hash::make('123456'),
        	'password' => '123456',
            'company_id' => '1',
            'group_id' => '1',
        ]);
        User::create([
        	'name' => 'Denise', 
        	'email' => 'denise@admin.com', 
            // 'password' => Hash::make('700902'),
            'password' => '700902',
            'company_id' => '1',
        	'group_id' => '2',
        ]);
        TestDummy::times(20)->create('App\User');
    }
}
