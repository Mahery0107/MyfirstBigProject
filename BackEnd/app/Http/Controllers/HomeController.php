<?php

namespace App\Http\Controllers;

use App\Mail\NotifyComments;
use App\Models\Header;
use App\Utils\NotificationCommentsData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class HomeController extends Controller
{

    public function mail(Request $request)
    {
        $data = [ 'message' =>$request->input('coms') ,
                 'email' =>$request->input('myemail')
    ];

        Mail::to(["razafimamonjymahery@gmail.com"])->send(new NotifyComments($data));
        return response()->json([
            "status" => 200,
            "message" => "comments sent",

        ]);
    }
}
