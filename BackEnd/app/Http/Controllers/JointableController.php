<?php

namespace App\Http\Controllers;

use App\Models\Actu;
use App\Models\Post;
use App\Models\Offre;
use App\Models\Composant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class JointableController extends Controller
{
   public function store(Request $request)
    {
        $actus = new Actu();
        $actus->titres = $request->input('title1');
        $actus->extraits= $request->input('extrait');
        $actus->descriptions = $request->input('descri2');

        if ($request->hasFile('media')) {
            $file = $request->file('media');

            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move('uploads/sary/', $filename);
            $actus->videos = 'uploads/sary/' . $filename;
        }

        $actus->save();

        return response()->json([
            'status' => 200,
            'message' => 'actus ajouté'
        ]);
    }

    public function edit($id)
    {
        $actus = Actu::find($id);
        if ($actus) {
            return response()->json([
                'status' => 200,
                'actus' => $actus,
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Pas de Id trouvé',
            ]);
        }
    }
}
