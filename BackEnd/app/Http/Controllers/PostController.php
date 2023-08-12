<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;


class PostController extends Controller
{
    public function likeOrUnlike ($id)
    {
         // like or unlike

        $post = Post::find($id);
       //  $user = User:: find($id);
        if(!$post)
        {
            return response([
                'message' => 'évènement introuvable.'
            ], 403);
        }

      //  $like = $post->likes()->where('user_id',  $user)->first();
      $like = Like::where('user_id', auth()->user()->id)
                    ->where('post_id', $post->id)
                    ->first();

        // if not liked then like
        if(!$like)
        {
            Like::create([
                'post_id' => $id,
                'user_id' => auth()->user()->id
            ]);

            return response()->json([
                "status" => 200,
                "message" =>  "post liked",
            ]);
        }
         //if like does already exist

        $post->likes()->detach(auth()->user());


             return response()->json([
                "status" => 200,
                "message" =>  "post disliked",
            ]);


    }

      public function like ($id)
      {


        $posts = Post::find($id);
        $user = User::find(auth()->user()->id);





     $count = count($posts->likes()->where('id', auth()->user()->id)->get());

     if ($count !== 0)
     {
        $posts->likes()->detach($user);
     }
     else{
        $posts->likes()->attach($user);
     }

    $likes = count($posts->likes()->get());  //maka nombre ana like

    return response()->json([
       "status" => 200,
       "likes" =>  $likes,
       "message" =>  "post liked"  ,
    ]);

    }

    public function store(Request $request)
    {


        $like = Like::where('user_id', auth()->user()->id)
                     ->where('post_id', $request->post_id)
                     ->first();

        if ($like)
        {
            $like->delete();


             return response()->json([
                "status" => 200,
                "message" =>  "post disliked",
            ]);
        }
        else
        {
            $like = new Like();
            $like->user_id = auth()->user()->id ;
            $like->post_id = $request->post_id;

            $like->save();

            return response()->json([
                "status" => 200,
                "message" =>  "post liked"  ,
            ]);

        }
    }

    public function all_likes($id)
 {
        $likes = Like::where('post_id', $id)->get();

        return  response()->json([
            "status" => 200,
            "likes"   => $likes,
 ]);
 }

   /* $posts = new Post();
      $user = new User();


$posts =  $request ->input('post_id');
$user = $request ->user()->id;
 $count = count($posts->likes()->where('id', user()->id)->get());

 */
}
