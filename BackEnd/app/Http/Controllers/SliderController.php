<?php

namespace App\Http\Controllers;

use App\Models\Slider;
use Illuminate\Http\Request;

class SliderController extends Controller
{
    public function store(Request $request){


        $slider = new Slider;
     $slider->nom = $request->input('nom');
     $slider->titre = $request->input('titres');
     $slider->description = $request->input('descris');
     $slider->description2 = $request->input('descrips');
     if($request->hasFile('img')){
        $file =$request->file('img');

        $extension = $file->getClientOriginalExtension();
        $filename = time().'.'.$extension;
        $file->move('uploads/sary/', $filename);
        $slider->images = 'uploads/sary/'.$filename ;

       }




       $slider->save();

     return response()->json([
        'status' => 200,
        'message' => 'slider ajouté',
     ]) ;




    }

   public function index()
    {
        $sliders = Slider::all();
       // return view('welcome', compact('vehicules'));
       return response()->json(Slider::get());
    }
    public function edit($id){
        $slider = Slider::find($id);
      if($slider)
      {
        return response()->json([
            'status' => 200,
            'slider' => $slider,
         ]) ;
      }
      else{
        return response()->json([
            'status' => 404,
            'message' => 'Pas de Id trouvé',
         ]) ;
      }
    }
   /* public function edit($id){
        return response()->json( slider::whereId($id)->first());
    }*/
    public function update(Request $request ,$id)
    {
        $slider = Slider::whereId($id)->first();
        $slider->update([
            'nom' => $request->nom,
            'titre'  => $request->titres,
            'description' => $request->descris,
            'description2' => $request->descrips,
            'images' => $request->img,



        ]);
        return response()->json([
            'status' => 200,
            'message' => 'slider modifié',
        ]);
    }
    public function destroy($id){

        $slider = Slider::find($id);
        if($slider)
        {
            $slider->delete();
          return response()->json([
              'status' => 200,
              'message' => 'slider effacé',
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
