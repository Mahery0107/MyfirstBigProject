<?php

namespace App\Http\Controllers;

use App\Models\Prixformation;
use Illuminate\Http\Request;

class PrixformationController extends Controller
{
    public function store(Request $request)
    {
        $prixformation = new Prixformation();

        $prixformation->designation =  $request->input('designation');
        $prixformation->Niveau =  $request->input('niveau');
        $prixformation->Prix =  $request->input('prix');

        $prixformation->save();

        return response()->json([
            'status' => 200,
            'message' => 'table ajouté' ,
         ]);
    }
    public function index ()
     {
        return response()->json(Prixformation::get());
    }
}
