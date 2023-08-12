<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vehicule;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class VehiculeController extends Controller
{


   /* public function show()
    {
        return view('Ajout');
    }

    public function accueil()
    {
        $vehicules = Vehicule::all();
        return view('welcome', compact('vehicules'));
    }
    public function create(Request $requete)
    {
        $users = User::all();
        User::create([
            'nom_v' => $requete->nom,
            'type'  => $requete->type,
            'marque' => $requete->marque,
            'dde' => $requete->dte
        ]);
        return redirect()->back();
    }*/
    public function recherche($key)
    {


         $posts = Vehicule::query()
         ->where('nom_v','like',"%.$key.%")
         ->orwhere('nom_prop','like',"%.$key.%")
         ->get();

         return $posts;
    }
    public function index()
    {
        $vehicules = Vehicule::all();
       // return view('welcome', compact('vehicules'));
       return response()->json(Vehicule::get());
    }
    public function accueil()
    {
        $vehicules = Vehicule::all();
        return response()->json(Vehicule::get());
    }
     public function store(Request $request)
    {
          Vehicule::create([
            'nom_v' => $request->name1,
            'type'  => $request->type1,
            'marque' => $request->marque1,
            'num_pla' => $request->num1,
            'dde' => $request->date1,
            'nom_prop' => $request->name2,
            'prenom' => $request->prename,
            'ddn' => $request->date2,
            'adress' => $request->addres,
            'num_cin' => $request->num2
          ]);
          return response()->json('successfuly created');
    }
    public function edit($id){
        return response()->json(Vehicule::whereId($id)->first());
    }
    public function update(Request $request ,$id)
    {
        $vehicule = Vehicule::whereId($id)->first();
        $vehicule->update([
            'nom_v' => $request->name1,
            'type'  => $request->type1,
            'marque' => $request->marque1,
            'num_pla' => $request->num1,
            'dde' => $request->date1,
            'nom_prop' => $request->name2,
            'prenom' => $request->prename,
            'ddn' => $request->date2,
            'adress' => $request->addres,
            'num_cin' => $request->num2
        ]);
        return response()->json('');
    }
     /*p public function findall(){
        return response()->json([
            [
                'id' => 1,
                'name' => 'name1',
            ],
            [
                'id' => 2,
                'name' => 'name2',
            ],
        ]);
    }
  ublic function modifier($id)
    {
        $vehicule = Vehicule::findOrFail($id);
        return view('modifier', compact('vehicule'));
    }
    public function update(Request $requete ,$id)
    {
        $vehicule = Vehicule::findOrFail($id);
        $vehicule->update([
            'nom_v' => $requete->nom,
            'type'  => $requete->type,
            'marque' => $requete->marque,
            'dde' => $requete->dte
        ]);
        return redirect()->back();
    }

    public function voir($id)
    {
        $vehicule = Vehicule::findOrFail($id);
        return view('detail',compact('vehicule'));
    }*/
    public function destroy($id)
    {
        Vehicule::whereId($id)->first()->delete();

        return response()->json('success');
    }
}
