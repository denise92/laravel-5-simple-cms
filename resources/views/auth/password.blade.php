@extends('layouts.auth')
@section('title'){{ trans('auth.password.title') }}@stop

@section('content')
    <h2>{{ trans('auth.password.title') }}</h2>
    <form method="POST" action="/password/email">
        @include('errors.validation')
        {!! csrf_field() !!}

        <div>
            {{ trans('auth.user.email') }}
            <input type="email" name="email" value="{{ old('email') }}">
        </div>
        <div>{{ trans('auth.password.email_content') }}</div>
        <div>
            <button type="submit">
                {{ trans('auth.password.submit') }}
            </button>
            or 
            <a href="{{ url('/auth/register') }}">{{ trans('auth.user.register') }}</a> | 
            <a href="{{ url('/auth/login') }}">{{ trans('auth.user.login') }}</a>
        </div>
    </form>
@endsection