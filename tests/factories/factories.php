<?php
$factory('App\UserCompany', [
    'title' => $faker->sentence(5),
]);

$factory('App\UserCompany', [
    'title' => $faker->sentence(5),
]);

$factory('App\UserGroup', [
    'title' => $faker->sentence(5),
]);

$factory('App\User', [
    'name' => $faker->userName,
    'email' => $faker->email,
    // 'password' => $faker->sha256
    'password' => Hash::make('123456'),
    'company_id' => $faker->numberBetween(1,15),
    'group_id' => $faker->numberBetween(1,5)
]);

$factory('App\Category', [
    'language_id' => $faker->numberBetween(1,2),
    'title' => $faker->sentence(5),
    'slug' => $faker->slug,
    'description' => $faker->sentence(5),
    'color' => $faker->hexcolor
]);

$factory('App\Article', [
    'category_id' => $faker->numberBetween(1,5),
    'title' => $faker->sentence(5),
    'slug' => $faker->slug,
    'content' => $faker->paragraphs(8),
    'published_at' => $faker->date($format = 'Y-m-d', $max = 'now'),
    'description' => $faker->sentence(5)
]);