<?php

namespace App\Http\Controllers;

use App\Models\Pageview;
use Illuminate\Http\Request;

use function PHPUnit\Framework\countOf;

class ViewController extends Controller
{
    public function views()
    {
        $vue = Pageview::find(1);

        if (!$vue)
        {
            $vue = new Pageview();
            $vue->vues = 1;
            $vue->save();
        }
         else{
            $vue->vues = $vue->vues+1 ;
            $vue->save();
         }


         return response()->json([
             "status"=>200,
             "vue" => $vue,
         ]);
    }

    public function views_count()
    {
        $views = Pageview::get()->first();


        return response()->json([
            "status"=>200,
            "compte" => $views,
        ]);

    }
}
