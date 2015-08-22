<h2>{{ trans('auth.password.email_title') }}</h2>
<div>{{ trans('auth.password.email_content') }}</div>
<div>{{ url('password/reset/'.$token) }}</div>