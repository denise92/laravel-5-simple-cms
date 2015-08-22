<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Company;
use Datatable;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $table = $this->setDatatable();
        return view('admin.users.companies_index', compact('table'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Create Datatable HTML
     *
     * @return mixed
     * @throws \Exception
     */
    private function setDatatable()
    {
        return Datatable::table()
            ->addColumn(trans('admin.fields.group.name'))
            ->addColumn(trans('admin.ops.name'))
            ->setUrl(route('admin.company.table'))
            ->setOptions(array('sPaginationType' => 'bs_normal', 'oLanguage' => trans('admin.datatables')))
            ->render();
    }

    /**
     * JSON data for seeding Datatable
     *
     * @return mixed
     */
    public function getDatatable()
    {
        // if(Datatable::shouldHandle()){
            return Datatable::collection(Company::all())
                ->showColumns('title')
                ->addColumn('',function($model)
                {
                    return get_ops('group', $model->id);
                })
                ->searchColumns('title')
                ->orderColumns('title')
                ->make();
        // }
    }

    /**
     * Save image to uploads folder and change the name to something unique
     *
     * @param UserRequest $request
     * @param $field
     * @return array
     */
    private function storeImage(UserRequest $request, $field)
    {
        
        $data = $request->except([$field]);

        /*if($request->file($field))
        {
            $file = $request->file($field);
            $request->file($field);
            $fileName = rename_file($file->getClientOriginalName(), $file->getClientOriginalExtension());
            $path = '/uploads/' . str_plural($field);
            $move_path = public_path() . $path;
            $file->move($move_path, $fileName);
            $data[$field] = $path . $fileName;
        }*/
        return $data;
    }
}
