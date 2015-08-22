@extends('layouts.admin')
@section('content')
{!! form_start($form) !!}
<div class="form-body">
	<div class="row">
		<div class="col-md-6">
			{!! form_row($form->email) !!}
		</div>
		<div class="col-md-6">
			{!! form_row($form->analytics_id) !!}
		</div>
		<div class="col-md-6">
			{!! form_row($form->facebook) !!}
		</div>
		<div class="col-md-6">
			{!! form_row($form->fb_app_id) !!}
		</div>
		<div class="col-md-6">
			{!! form_row($form->og_type) !!}
		</div>
		<div class="col-md-6">
			{!! form_row($form->og_site_name) !!}
		</div>
		<div class="col-md-6">
			{!! form_row($form->meta_author) !!}
		</div>
		<div class="col-md-6">
			{!! form_row($form->logo) !!}
			@unless ($setting->logo == "")
		        <div class="uploaded-file">
		            <strong>{{ trans('admin.fields.uploaded')  }}</strong>
		            <img class="img-responsive" alt="" src="{!! $setting->logo  !!}" />
		        </div>
		    @endunless
		</div>
	</div>
	
	<div class="row">
		<div class="col-md-6">
			{!! form_row($form->meta_desc) !!}
		</div>
		<div class="col-md-6">
			{!! form_row($form->meta_keywords) !!}
		</div>
	</div>
</div>
{!! form_end($form, $renderRest = true); !!}
@endsection