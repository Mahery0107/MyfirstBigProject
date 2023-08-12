<?php

namespace App\Http\Controllers;

use App\Models\Prixautre;
use Illuminate\Http\Request;

class PrixotherController extends Controller
{
    public function store(Request $request)
    {
        $price = new Prixautre();

        $price->designation = $request->input('designation');
        $price->price = $request->input('prix');
        $price->save();

        return response()->json([
            "status"=> 200,
            "message"=> "table créé",
        ]);
    }

    public function index()
    {

        return response()->json(Prixautre::get());
    }
}
