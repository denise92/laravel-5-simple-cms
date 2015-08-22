<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumnsToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->unsignedInteger('company_id');
            $table->foreign('company_id')->references('id')->on('user_companies');
            $table->unsignedInteger('group_id');
            $table->foreign('group_id')->references('id')->on('user_groups');
            $table->timestamp('logged_in_at')->nullable();
            $table->timestamp('logged_out_at')->nullable();
            $table->string('ip_address', 45)->nullable();
            $table->boolean('is_admin')->default(true);
            // $table->binary('ip_address')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('company_id');
            $table->dropColumn('group_id');
            $table->dropColumn('logged_in_at');
            $table->dropColumn('logged_out_at');
            $table->dropColumn('ip_address');
            $table->dropColumn('is_admin');
        });
    }
}