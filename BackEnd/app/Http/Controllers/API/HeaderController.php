<?php

namespace App\Http\Controllers\API;

use App\Models\Header;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class HeaderController extends Controller
{
    public function store(Request $request){



        $header = new Header;
     $header->nom = $request->input('nom');
     $header->titre = $request->input('titres');
     $header->description = $request->input('descris');
       if($request->hasFile('img')){
        $file =$request->file('img');

        $extension = $file->getClientOriginalExtension();
        $filename = time().'.'.$extension;
        $file->move('uploads/sary/', $filename);
        $header->images = 'uploads/sary/'.$filename ;

       }


     $header->save();

     return response()->json([
        'status' => 200,
        'message' => 'Header ajouté',
     ]) ;




    }

    public function index()
    {
        $headers = Header::all();
       // return view('welcome', compact('vehicules'));
       return response()->json(Header::get());
    }
    public function edit($id){
        $header = Header::find($id);
      if($header)
      {
        return response()->json([
            'status' => 200,
            'header' => $header,
         ]) ;
      }
      else{
        return response()->json([
            'status' => 404,
            'message' => 'Pas de Id trouvé',
         ]) ;
      }
    }
    public function show($id){
        return response()->json( Header::whereId($id)->first());
    }
    public function update(Request $request ,$id)

    {


        $header = Header::whereId($id)->first();
        $header->update([
            'nom' => $request->nom,
            'titre'  => $request->titres,
            'description' => $request->descris,
            'description2' => $request->descrips,

            'images' => $request->img,



        ]);
        return response()->json('');
    }
    public function destroy($id){

        $header = Header::find($id);
        if($header)
        {
            $header->delete();
          return response()->json([
              'status' => 200,
              'message' => 'Header effacé',
           ]) ;
        }
        else{
          return response()->json([
              'status' => 404,
              'message' => 'Pas de Id trouvé',
           ]) ;
        }

    }
}
