<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class SettingRequest extends Request
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
			'email'        => 'sometimes|email|min:7',
			'facebook'     => 'sometimes|min:1|max:40',
			'fb_app_id'    => 'sometimes|min:5|max:40',
			'analytics_id' => 'sometimes|min:5|max:40',
			'logo'         => 'sometimes|max:2048|image'
        ];
    }

}
