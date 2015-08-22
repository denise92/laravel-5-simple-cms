@extends('layouts.admin')
@section('content')
    {!! $table !!}
@endsection
{{-- @section('content')
    <table class="table table-striped table-bordered table-hover" id="dataTable">
	<thead>
	<tr>
		<th>{{trans('admin.fields.language.title')}}</th>
		<th>{{trans('admin.fields.language.code')}}</th>
		<th>{{trans('admin.fields.updated_at')}}</th>
		<th>{{trans('admin.ops.name')}}</th>
	</tr>
	</thead>
	<tbody>
		@foreach ($table as $data) 
		<tr>
			<td>{{$data->title}}</td>
			<td>{{$data->code}}</td>
			<td>{{$data->updated_at}}</td>
			<td>{{$data->id}}</td>
		</tr>
		@endforeach
	</tbody>
	</table>
    	
    	
	
	<script type="text/javascript">
		var table = $('#dataTable');

        var oTable = table.dataTable({
            "order": [
                [0, 'asc']
            ],
            
            "lengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 10,

            "dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

            
        });

        var tableWrapper = $('#dataTable_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper

        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
    
	</script>
@endsection --}}