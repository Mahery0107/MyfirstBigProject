<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function store(Request $request)
    {
        $coms = new Comment();

        $coms->user_id = $request ->user()->id;
        $coms->post_id =  $request ->input('post_id');
        $coms->content =  $request ->input('content');

        $coms->save();

        return response()->json([
            "status" => 200,
            "comments" =>  $coms,
            "message" =>  "commentaire ajouté",
        ]);
    }

    public function show_coms($id)
    {
         $coms = Comment::with('user')->where('post_id', $id)->get();


         return  response()->json([
            "status" => 200,
            "comments" =>  $coms,
        ]);
    }

    public function  destroy($id)
    {
        $coms = Comment::find($id);
        if($coms)
        {
            $coms->delete();
          return response()->json([
              'status' => 200,
              'message' => 'commentaire effacé',
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
        $coms = Comment::find($id);
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

    $evenment = Post::find($id);

    $coms = Comment::whereId($id)->first();
    $coms->update([
        'content' => $request->comments,




    ]);
    return response()->json([

        'status' => 200,
        'message' => 'commentaire modifié',
        'evenment'  => $evenment,
    ]);

}

/*
$posts = new Post();
$user = new User();



$posts =  $request ->input('post_id');
$user = $request ->user()->id;*/

}
