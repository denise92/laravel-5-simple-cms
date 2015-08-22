<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MakeMenu extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'menus';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 
    	'parent_id', 
    	'code', 
    	'title', 
        'icon', 
    	'route', 
    	'disp_sort', 
    	'status'
    ];
}
