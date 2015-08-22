<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\SoftDeletes;
use Bican\Roles\Traits\HasRoleAndPermission;
use Bican\Roles\Contracts\HasRoleAndPermission as HasRoleAndPermissionContract;

class User extends Model implements AuthenticatableContract, CanResetPasswordContract
{
    use Authenticatable, CanResetPassword, HasRoleAndPermission;
    use SoftDeletes;

    /**
     * SoftDeletes：需要被轉換成日期的屬性。
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'email', 'password', 'company_id', 'group_id'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['password', 'remember_token'];

    

    /**
     * Set password encrypted
     *
     * @param $password
     */
    public function setPasswordAttribute($password)
    {
        $this->attributes['password'] =  Hash::make($password);
    }

    /**
     * Get the logged_in_at attribute.
     *
     * @param  $date
     * @return string
     */
    public function getLoggedInAtAttribute($date)
    {
        // 將傳入的 Y-m-d 時間設為 datetime 格式的凌晨零時 00:00:00
        return Carbon::parse($date);
    }

    /**
     * Get the logged_out_at attribute.
     *
     * @param  $date
     * @return string
     */
    public function getLoggedOutAtAttribute($date)
    {
        // 將傳入的 Y-m-d 時間設為 datetime 格式的凌晨零時 00:00:00
        return Carbon::parse($date);
    }

    /**
     * Set the ip address attribute.
     *
     * @param $ip
     * @return string
     */
    public function setIpAddressAttribute($ip)
    {

        $this->attributes['ip_address'] = $ip;
        // $this->attributes['ip_address'] = inet_pton($ip);
        // $this->attributes['ip_address'] = pg_escape_bytea(inet_pton( $ip ));

    }

    /**
     * Get the ip address attribute.
     *
     * @param $ip
     * @return string
     */
    public function getIpAddressAttribute($ip)
    {
        // return pg_escape_bytea(inet_ntop($ip));
        // return inet_ntop($ip);
        return $ip;

    }

}
