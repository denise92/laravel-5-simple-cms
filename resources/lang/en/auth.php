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

    'failed' => 'These credentials do not match our records.',
    'throttle' => 'Too many login attempts. Please try again in :seconds seconds.',
    // register & login & logout page...
    "user" => [
        "register"              => "Register",
        "login"                 => "Login",
        "name"                  => "Name",
        "email"                 => "E-mail address",
        "password"              => "Password",
        "password_confirm"      => "Confirm password",
        "remember"              => "Remember Me",
        "forgot"                => "I forgot my password?",
        "btn_login"             => "Login now!",
        "btn_register"          => "Register now!",
        "logout"                => "Logout",
    ],
    
    "password" => [
        "title"                 => "Forgot Password",
        "submit"                => "Send Password Reset Link",
        // use in /vendor/laravel/framework/src/Illuminate/Foundation/Auth/ResetsPasswords.php
        "email_title"           => "Your Password Reset Link!",
        "email_content"         => "Click to this link to reset your password:",
    ],
    "reset" => [
        "title"                 => "Reset my Password",
        "submit"                => "Submit",
        "password"              => "New password",
        "password_confirmation" => "New password confirmation",
    ]
];
