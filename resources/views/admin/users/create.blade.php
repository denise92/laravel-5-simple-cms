@extends('layouts.admin')

@section('content')
{!! form_start($form) !!}
<div class="form-body">
	<div class="row">
		<div class="col-md-6">
			{!! form_row($form->name) !!}
		</div>
		<div class="col-md-6">
			{!! form_row($form->email) !!}
		</div>
		<div class="col-md-6">
			{!! form_row($form->password) !!}
		</div>
		<div class="col-md-6">
			{!! form_row($form->password_confirmation) !!}
		</div>
	</div>
</div>
{!! form_end($form, $renderRest = true); !!}
@endsection