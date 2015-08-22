@if ($errors->any())
    <div class="alert alert-danger alert-dismissable">
        <button type="button" class="close" data-dismiss="alert" aria-label="true"></button>
        @foreach ($errors->all() as $error)
            <span>{{ $error }}</span>
        @endforeach
    </div>
@endif
