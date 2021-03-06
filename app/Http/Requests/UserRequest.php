<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;
use App\User;

class UserRequest extends Request
{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {

        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'       => 'required|min:3',
            'email'      => 'required|email|min:7|unique:users,email,'.$this->segment(3),
            'password'   => 'required|confirmed|min:6|max:20',
            'company_id' => 'required|integer',
            'group_id'   => 'required|integer'
        ];
    }

}