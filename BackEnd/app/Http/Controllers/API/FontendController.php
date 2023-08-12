<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Actu;
use App\Models\actus;
use App\Models\Header;
use App\Models\Offre;
use App\Models\Post;
use App\Models\Prixformation;
use App\Models\Slider;
use Illuminate\Http\Request;

class FontendController extends Controller
{
    public function  header()
    {

        $slider = Slider::get();

        return response()->json([
            'status' => 200,
            'header' =>  $slider,
        ]);
    }
    public function  actus()
    {

        $actus = Actu::get();

        return response()->json([
            'status' => 200,
            'actus' =>  $actus,
        ]);
    }
   public function   evenment()
    {

        $evenment = Post::get();

        return response()->json([
            'status' => 200,
            'header' =>  $evenment,
        ]);
    }
    public function  offre()
    {

       $offre = Offre::get();

        return response()->json([
            'status' => 200,
            'offre' =>  $offre,
        ]);
    }
    public function prix()
    {

       $price = Prixformation::get();

        return response()->json([
            'status' => 200,
            'price' => $price,
        ]);
    }
}
