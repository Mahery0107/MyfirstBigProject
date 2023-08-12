<?php

namespace App\Http\Controllers;

use App\Models\Entite;
use Illuminate\Http\Request;

class EntiteController extends Controller
{
    public function store(Request $request){

        $entite = new Entite ;



        $entite->nom_entites = $request->input('nom');
        $entite->description_id = $request->input('descrip_id');

        $entite->save();

        return response()->json([
            'status' => 200,
            'message' => 'entité ajouté',
         ]) ;
    }
    public function allEntite(){

        $entite = Entite::get();

        return response()->json([
            'status' => 200,
            'entite' => $entite,
         ]) ;
    }
}
