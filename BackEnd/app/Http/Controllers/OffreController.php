<?php

namespace App\Http\Controllers;

use App\Models\Offre;
use Illuminate\Http\Request;

class OffreController extends Controller
{
    public function store(Request $request)
    {
        $offre = new Offre ;

        $offre->nom_offres = $request->input('nom_offre');
        $offre->entite_id = $request->input('entite_id');
        $offre->description_id = $request->input('descripts_id');
        $offre->composant_id = $request->input('composant_id');

        $offre->save();

        return response()->json([
           'status' => 200,
           'message' => "Offre ajouté"
        ]);
    }
    public function index()
    {

       // return view('welcome', compact('vehicules'));
       return response()->json(Offre::get());
    }
    public function destroy($id)
    {


        $offre = Offre::find($id);
        if($offre)
        {
            $offre->delete();
          return response()->json([
              'status' => 200,
              'message' => 'offre effacé',
           ]) ;
        }
        else{
          return response()->json([
              'status' => 404,
              'message' => 'Pas de Id trouvé',
           ]) ;
        }

    }

    public function edit($offre_id)
    {
        $offre = Offre::find($offre_id);
        if ($offre) {
            return response()->json([
                'status' => 200,
                'offre' => $offre,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Pas de Id trouvé',
            ]);
        }
    }
    public function update(Request $request, $offre_id)
    {
        $offre = Offre::whereId($offre_id)->first();

        $offre->update([
            'nom_offres' => $request->nom_offre,

            'entite_id' => $request->entite_id,
            'description_id' => $request->descripts_id,
            'composant_id' => $request->composant_id,



        ]);
        return response()->json([
            'status' => 200,
            'message' => 'offre modifié',
        ]);
    }

    public function allOffres()
    {
        $offrees = Offre::groupBy('nom_offres')->get();

        return response()->json([
            'status' => 200,
            'offrees' => $offrees,
         ]) ;
    }

    public function eachOffre($nom_offres)
    {
        $data = Offre::where('nom_offres',$nom_offres)->get();
        $offree =  $data->groupBy(['nom_offres','entite_id','description_id','composant_id']);
   if ($offree){

    return response()->json([
        'status' => 200,
        'offree' => $offree,
     ]) ;
   }
    }

    public function trygrup()
    {
        $data = Offre::all();
     $offre =   $data->groupBy(['nom_offres','entite_id','description_id','composant_id']);

        return response()->json([
            'status' => 200,
            'offree' => $offre,
         ]) ;
    }

}
