<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Application routes
Route::group(['middleware' => 'auth', 'namespace' => 'Admin'], function(){
	Route::get('/', ['as'=>'admin.root', 'uses'=>'HomeController@home']);

});
// Admin routes
Route::group(['prefix' => 'admin', 'namespace' => 'Admin', 'middleware' => 'auth'], function()
{
    Route::get('user/table', ['as'=>'admin.user.table', 'uses'=>'UserController@getDatatable']);
    Route::get('company/table', ['as'=>'admin.company.table', 'uses'=>'CompanyController@getDatatable']);
	Route::get('group/table', ['as'=>'admin.group.table', 'uses'=>'GroupController@getDatatable']);
	Route::get('language/table', ['as'=>'admin.language.table', 'uses'=>'LanguageController@getDatatable']);
    Route::get('/', ['as' => 'admin.root', 'uses' => 'HomeController@index']);
	Route::post('language/change', ['as' => 'admin.language.change' , 'uses' => 'LanguageController@postChange']);
    Route::group(['middleware' => 'role:admin'], function(){
        Route::resource('language' , 'LanguageController');
        
        Route::get('setting', ['as' => 'admin.setting.index', 'uses' => 'SettingController@getSettings', ]); 
        Route::patch('setting/{setting}', ['as' => 'admin.setting.update', 'uses' => 'SettingController@patchSettings']);
    });
    Route::group(['middleware' => 'role:user|admin'], function(){
        Route::resource('user', 'UserController');
        Route::resource('company', 'CompanyController');
        Route::resource('group', 'GroupController');
    });

});
// Auth routes
Route::group(['prefix' => 'auth', 'namespace' => 'Auth'], function()
{
	// 認證路由...
    Route::get('/', ['as' => 'auth.root', 'uses' => 'AuthController@getLogin']);
    Route::get('login',  ['as' => 'auth.login', 'uses' => 'AuthController@getLogin']);
    Route::post('login', ['as' => 'auth.login', 'uses' => 'AuthController@postLogin']);
    Route::get('logout', ['as' => 'auth.logout', 'uses' => 'AuthController@getLogout']);
    // 註冊路由...
    // Route::get('register', ['as' => 'auth.register', 'uses' => 'AuthController@getRegister']);
    // Route::post('register', ['as' => 'auth.register', 'uses' => 'AuthController@postRegister']);
});

// Password routes
Route::group(['prefix' => 'password', 'namespace' => 'Auth'], function()
{
	// 密碼重置連結的路由...
    Route::get('/',  ['as' => 'password.email', 'uses' => 'PasswordController@getEmail']);
    Route::get('email',  ['as' => 'password.email', 'uses' => 'PasswordController@getEmail']);
    Route::post('email', ['as' => 'password.email', 'uses' => 'PasswordController@postEmail']);
    // 密碼重置的路由...
    Route::get('reset/{token}',  ['as' => 'password.reset', 'uses' => 'PasswordController@getReset']);
    Route::post('reset', ['as' => 'password.reset', 'uses' => 'PasswordController@postReset']);
});