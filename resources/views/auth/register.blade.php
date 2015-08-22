@extends('layouts.auth')
@section('title'){{ trans('auth.user.register') }}@stop

@section('content')
    <h2>{{ trans('auth.user.register') }}</h2>
    <form method="POST" action="/auth/register">
        @include('errors.validation')
        {!! csrf_field() !!}

        <div class="col-md-6">
            {{ trans('auth.user.name') }}
            <input type="text" name="name" value="{{ old('name') }}">
        </div>

        <div>
            {{ trans('auth.user.email') }}
            <input type="email" name="email" value="{{ old('email') }}">
        </div>

        <div>
            {{ trans('auth.user.password') }}
            <input type="password" name="password">
        </div>

        <div class="col-md-6">
            {{ trans('auth.user.password_confirm') }}
            <input type="password" name="password_confirmation">
        </div>

        <div>
            <button type="submit">{{ trans('auth.user.btn_register') }}</button>
            <a href="{{ url('/auth/login') }}">{{ trans('auth.user.login') }}</a>
        </div>
    </form>
@endsection