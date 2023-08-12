<?php

namespace App\Http\Controllers;

use App\Models\Prixservice;
use Illuminate\Http\Request;

class PrixserviceController extends Controller
{
    public function store(Request $request)
    {
        $price = new Prixservice();

        $price->services = $request->input('service');
        $price->options = $request->input('option');
        $price->unites = $request->input('unite');
        $price->price = $request->input('prix');
        $price->save();

        return response()->json([
            "status"=> 200,
            "message"=> "table créé",
        ]);
    }

    public function index()
    {

        return response()->json(Prixservice::get());
    }
}
