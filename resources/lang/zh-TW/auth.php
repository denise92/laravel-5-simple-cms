<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Authentication Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are used during authentication for various
    | messages that we need to display to the user. You are free to modify
    | these language lines according to your application's requirements.
    |
    */

    'failed' => '輸入的欄位內容有誤.',
    'throttle' => '嘗試登錄次數過多. 請於 :seconds 秒後再試一次.',
    // register & login & logout page...
    "user" => [
        "register"              => "註冊",
        "login"                 => "登入",
        "name"                  => "姓名",
        "email"                 => "Email",
        "password"              => "密碼",
        "password_confirm"      => "確認密碼",
        "remember"              => "記住我",
        "forgot"                => "忘記密碼?",
        "btn_login"             => "登入",
        "btn_register"          => "註冊",
        "logout"                => "登出",
    ],
    
    "password" => [
        "title"                 => "忘記密碼",
        "submit"                => "發送密碼重置連結",
        // use in /vendor/laravel/framework/src/Illuminate/Foundation/Auth/ResetsPasswords.php
        "email_title"           => "你的密碼重置連結",
        "email_content"         => "點擊此連結重置密碼:",
    ],
    "reset" => [
        "title"                 => "重置我的密碼",
        "submit"                => "送出",
        "password"              => "新密碼",
        "password_confirmation" => "確認新密碼",
    ]
];
