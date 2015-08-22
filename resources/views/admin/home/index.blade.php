@extends('layouts.admin')
@section('content')
<!-- BEGIN DASHBOARD STATS -->
<div class="row">
{!! dashboard_box("blue-madison", "plus-square-o",
    trans('admin.fields.dashboard.total_visits'), $statistics['total_visits']) !!}
{!! dashboard_box("red-intense", "times-circle-o",
    trans('admin.fields.dashboard.bounce_rate'), $statistics['averages']['bounce'] . "%") !!}
{!! dashboard_box("green-haze", "clock-o",
    trans('admin.fields.dashboard.average_time'), formatMilliseconds($statistics['averages']['time'])) !!}
{!! dashboard_box("purple-plum", "exchange",
    trans('admin.fields.dashboard.page_visits'),  $statistics['averages']['visit']) !!}
<!-- END DASHBOARD STATS -->
</div>
@endsection
