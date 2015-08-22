@extends('layouts.auth')
@section('title'){{ trans('auth.reset.title') }}@stop

@section('content')
    <h2>{{ trans('auth.reset.title') }}</h2>
    <form method="POST" action="/password/reset">
        @include('errors.validation')
        {!! csrf_field() !!}
        
        <input type="hidden" name="token" value="{{ $token }}">
        
        <div>
            {{ trans('auth.user.email') }}: 
            <input type="email" name="email" value="{{ old('email') }}">
        </div>
        
        <div>
            {{ trans('auth.reset.password') }}: 
            <input type="password" name="password">
        </div>
        
        <div>
            {{ trans('auth.reset.password_confirmation') }}: 
            <input type="password" name="password_confirmation">
        </div>

        <div>
            <button type="submit">
                {{ trans('auth.reset.submit') }}
            </button>
        </div>
    </form>
@endsection