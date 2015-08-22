<?php

namespace App\Forms;

use Kris\LaravelFormBuilder\Form;

class SettingsForm extends Form
{
    public function buildForm()
    {
        $this
            ->add('email', 'text', [
                'label' => trans('admin.fields.setting.email')
            ])
            ->add('facebook', 'text', [
                'label' => trans('admin.fields.setting.facebook')
            ])
            ->add('fb_app_id', 'text', [
                'label' => trans('admin.fields.setting.fb_app_id')
            ])
            ->add('og_type', 'text', [
                'label' => trans('admin.fields.setting.og_type')
            ])
            ->add('og_site_name', 'text', [
                'label' => trans('admin.fields.setting.og_site_name')
            ])
            ->add('analytics_id', 'text', [
                'label' => trans('admin.fields.setting.analytics_id')
            ])
            ->add('meta_author', 'text', [
                'label' => trans('admin.fields.setting.meta_author')
            ])
            ->add('meta_desc', 'textarea', [
                'label' => trans('admin.fields.setting.meta_desc')
            ])
            ->add('meta_keywords', 'textarea', [
                'label' => trans('admin.fields.setting.meta_keywords')
            ])
            ->add('logo', 'file', [
                'label' => trans('admin.fields.setting.logo'),
                'attr' => ['class' => '']
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