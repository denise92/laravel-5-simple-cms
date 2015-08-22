<?php

namespace App\Forms;

use Kris\LaravelFormBuilder\Form;
use DB;
class UsersForm extends Form
{
    public function buildForm()
    {
        $companies = DB::table('user_companies')->lists('title', 'id');
        $groups = DB::table('user_groups')->lists('title', 'id');

        $this
            ->add('name', 'text', [
                'label' => trans('admin.fields.user.name'),
                'attr' => ['class' => 'form-control'],
            ])
            ->add('email', 'email', [
                'label' => trans('admin.fields.user.email')
            ])
            ->add('password', 'password', [
                'label' => trans('admin.fields.user.password')
            ])
            ->add('password_confirmation', 'password', [
                'label' => trans('admin.fields.user.password_confirmation')
            ])

            ->add('company_id', 'select', [
                'label' => trans('admin.fields.user.company'),
                'choices' => $companies,
                'attr' => ['class' => 'select2me form-control'],
                'empty_value' => '=== Select company ==='
            ])

            ->add('group_id', 'select', [
                'label' => trans('admin.fields.user.group'),
                'choices' => $groups,
                'attr' => ['class' => 'select2me form-control'],
                'empty_value' => '=== Select group ==='
            ])
            
            ->add('save', 'submit', [
                'label' => trans('admin.fields.save'),
                'attr' => ['class' => 'btn btn-primary']
            ])
            ->add('clear', 'reset', [
                'label' => trans('admin.fields.reset'),
                'attr' => ['class' => 'btn btn-warning']
            ]);
    }
}