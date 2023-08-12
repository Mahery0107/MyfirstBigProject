<?php

namespace App\Http\Controllers;

use App\Models\Actu;
use App\Models\User;
use App\Models\Commentactu;
use App\Models\Likeactu;
use Illuminate\Http\Request;

class ActuController extends Controller
{
    public function store(Request $request)
    {
        $coms = new Commentactu();

        $coms->user_id = $request ->user()->id;
        $coms->actu_id =  $request ->input('actu_id');
        $coms->contents =  $request ->input('content');

        $coms->save();

        return response()->json([
            "status" => 200,
            "comments" =>  $coms,
            "message" =>  'comments added',
        ]);
    }
  public function show_comms($id)
    {
         $coms = Commentactu::with('user')->where('actu_id', $id)->get();

         return  response()->json([
            "status" => 200,
            "comments" =>  $coms,
        ]);
    }

    public function likes ($id)
    {
         // like or unlike

         $actus = Actu::find($id);
         $user = User::find(auth()->user()->id);





      $count = count($actus->likes()->where('id', auth()->user()->id)->get());

      if ($count !== 0)
      {
         $actus->likes()->detach($user);
      }
      else{
         $actus->likes()->attach($user);
      }

     $likes = count($actus->likes()->get());  //maka nombre ana like

     return response()->json([
        "status" => 200,
        "likes" =>  $likes,
        "message" =>  "post liked"  ,
     ]);

}
public function all_likesactus($id)
{
       $likes = Likeactu::where('actu_id', $id)->get();

       return  response()->json([
           "status" => 200,
           "likes"   => $likes,
]);
}

public function destroy($id)
{


    $coms = Commentactu::find($id);
    if($coms)
    {
        $coms->delete();
      return response()->json([
          'status' => 200,
          'message' => 'coms effacé',
       ]) ;
    }
    else{
      return response()->json([
          'status' => 404,
          'message' => 'Pas de Id trouvé',
       ]) ;
    }

}
public function delete($id)
{


    $actu = Actu::find($id);
    if($actu)
    {
        $actu->delete();
      return response()->json([
          'status' => 200,
          'message' => 'actus effacé',
       ]) ;
    }
    else{
      return response()->json([
          'status' => 404,
          'message' => 'Pas de Id trouvé',
       ]) ;
    }

}

public function edit($id){
    $coms = Commentactu::find($id);
  if($coms)
  {
    return response()->json([
        'status' => 200,
        'coms' => $coms,
     ]) ;
  }
  else{
    return response()->json([
        'status' => 404,
        'message' => 'Pas de Id trouvé',
     ]) ;
  }
}

public function update(Request $request ,int $id)
{



$coms = Commentactu::whereId($id)->first();
$coms->update([
    'contents' => $request->comments,




]);
return response()->json([
    'status' => 200,
    'message' => 'coms modifié',
    'id'  =>$id,
]);

}

public function index ()
{
    return response()->json(Actu::get());
}
}
