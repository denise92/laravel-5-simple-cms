<?php

use Illuminate\Database\Seeder;
use App\Setting;

class SettingTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('settings')->delete();
        Setting::create(['email' => 'me@example.com', 'analytics_id' => 'UA-66012774-1']);
    }
}
