<?php

namespace App\Http\Controllers;

use App\Models\Composant;
use Illuminate\Http\Request;

class ComposantController extends Controller
{
    public function store(Request $request){


        $composant = new Composant;

     $composant->nom_composant = $request->input('nom');




     $composant->save();

     return response()->json([
        'status' => 200,
        'message' => 'composant ajouté',
     ]) ;




    }

    public function allComposant(){

        $composant = Composant::get();
        return response()->json([
            'status' => 200,
            'composant' =>  $composant,
         ]) ;

    }
    public function index(){

        $composant = Composant::all();
        return response()->json([
            'status' => 200,
            'composant' =>  $composant,
         ]) ;

    }
}
