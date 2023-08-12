<?php

namespace App\Http\Controllers\API;

use App\Models\Evenment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Post;

class EvenmtController extends Controller
{
    public function store(Request $request)
    {

        $evenment = new Post();
        $evenment->titres = $request->input('title1');
        $evenment->extrait= $request->input('extrait');
        $evenment->descriptions = $request->input('descri2');

        if ($request->hasFile('media')) {
            $file = $request->file('media');

            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move('uploads/sary/', $filename);
            $evenment->video = 'uploads/sary/' . $filename;
        }

        $evenment->save();

        return response()->json([
            'status' => 200,
            'message' => 'Evénment ajouté'
        ]);
    }

    public function index()
    {

        // return view('welcome', compact('vehicules'));
        return response()->json(Post::get());
    }

    public function destroy($id)
    {

        $evenment = Post::find($id);
        if ($evenment) {
            $evenment->delete();
            return response()->json([
                'status' => 200,
                'message' => 'evènments effacé',
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Pas de Id trouvé',
            ]);
        }
    }

    public function edit($id)
    {
        $evenment = Post::find($id);
        if ($evenment) {
            return response()->json([
                'status' => 200,
                'evenment' => $evenment,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Pas de Id trouvé',
            ]);
        }
    }
    public function show($id)
    {
        return response()->json(Post::whereId($id)->first());
    }
    public function update(Request $request, $id)
    {
        $evenment = Post::whereId($id)->first();
        $evenment->update([
            'titres' => $request->title1,

            'extrait' => $request->extrait,
            'descriptions' => $request->descri2,
            'media' => $request->video,





        ]);
        return response()->json([
            'status' => 200,
            'message' => 'evenment modifié',
        ]);
    }
}
