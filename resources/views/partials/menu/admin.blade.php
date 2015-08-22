<!-- BEGIN SIDEBAR -->
<div class="page-sidebar-wrapper"> 
	<!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing --> 
    <!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
    <div class="page-sidebar navbar-collapse collapse"> 
    	<!-- BEGIN SIDEBAR MENU (選單)-->
		<ul class="page-sidebar-menu" data-auto-scroll="true" data-slide-speed="200">
		    <!--收合選單-->
		    <li class="sidebar-toggler-wrapper"> 
		      <!-- BEGIN SIDEBAR TOGGLER BUTTON -->
		      <div class="sidebar-toggler"> </div>
		      <!-- END SIDEBAR TOGGLER BUTTON --> 
		    </li>
		    <!--收合選單 end-->
		    
		    @foreach($items as $item)
		    	<li class="{{ $item->attributes() != "" ? 'active' : '' }} ">
					<a href="{{ $item->url() }}">
						<span class="title">{!! $item->title !!}</span>
						@if($item->hasChildren())
							<span class="arrow "></span>
						@endif
					</a>
					@if($item->hasChildren())
						<ul class="sub-menu">
							@foreach($item->children() as $child)
								<li class="{{ $child->attributes() != "" ? 'active' : '' }}">
									<a href="{{ $child->url() }}"> {!! $child->title !!}</a> 
								</li>
							@endforeach
						</ul>
					@endif
		    	</li>
		    @endforeach
		</ul>
		<!-- END SIDEBAR MENU(選單) --> 
    </div>
</div>
<!-- END SIDEBAR --> 


		