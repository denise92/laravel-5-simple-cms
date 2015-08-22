@extends('layouts.admin')

@section('content')
    <div class="text-center">
        <h1> {{ $user->name  }} </h1>
        <a href="mailto:{{ $user->email }}">
            <h2> {{ trans('admin.fields.user.email') . ': ' . $user->email  }}</h2>
        </a>
        
        <h2> {{ trans('admin.fields.user.company') . ': ' . $user->company  }}</h2>
        <h2> {{ trans('admin.fields.user.group') . ': ' . $user->group  }}</h2>
        <h2> {{ trans('admin.fields.user.ip_address') . ': ' . $user->ip_address  }}</h2>
    </div>
    @if(Auth::check() && Auth::user()->is('admin')):
    	<br>user is admin
	@endif
	
@endsection
