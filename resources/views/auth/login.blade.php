@extends('layouts.auth')
@section('title'){{ trans('auth.user.login') }}@stop

@section('content')
    <h2>{{ trans('auth.user.login') }}</h2>
    <form method="POST" action="/auth/login">
        @include('errors.validation')
        {!! csrf_field() !!}
        
        <div>
            {{ trans('auth.user.email') }}
            <input type="email" name="email" value="{{ old('email') }}">
        </div>

        <div>
            {{ trans('auth.user.password') }}
            <input type="password" name="password" id="password">
        </div>

        <div>
            <input type="checkbox" name="remember"> {{ trans('auth.user.remember') }}
        </div>

        <div>
            <button type="submit">{{ trans('auth.user.btn_login') }}</button>
            or 
            <a href="{{ url('/auth/register') }}">{{ trans('auth.user.register') }}</a> | 
            <a href="{{ url('/password/email') }}">{{ trans('auth.user.forgot') }}</a>
        </div>
    </form>
@endsection