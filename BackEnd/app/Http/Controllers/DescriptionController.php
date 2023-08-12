<?php

namespace App\Http\Controllers;

use App\Models\Description;
use Illuminate\Http\Request;

class DescriptionController extends Controller
{
    public function store(Request $request){

        $description = new Description ;



        $description->descriptions = $request->input('nom');
        $description->composant_id = $request->input('composant_id');

        $description->save();

        return response()->json([
            'status' => 200,
            'message' => 'description ajouté',
         ]) ;
    }

    public function allDescription()
    {
        $description = Description::get();
        return response()->json([
            'status' => 200,
            'description' =>  $description,
         ]) ;
    }
}
