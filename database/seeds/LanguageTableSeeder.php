<?php

use Illuminate\Database\Seeder;
use App\Language;

class LanguageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        DB::table('languages')->delete();
        Language::create(['title' => '繁體中文', 'code' => 'zh-TW', 'site_title' => '倉儲系統', 'site_description' => 'OCERP WMS']);
        Language::create(['title' => 'English', 'code' => 'en', 'site_title' => 'WMS', 'site_description' => 'OCERP WMS']);
        
    }
}
