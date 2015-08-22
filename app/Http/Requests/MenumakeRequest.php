<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;
use App\Menumake;

class MenumakeRequest extends Request
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
            'code'      => 'required|max:3|unique:menus,code,'.$this->segment(3),
            'title'     => 'required|min:3',
        ];
    }

}