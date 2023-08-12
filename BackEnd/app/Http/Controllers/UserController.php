<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json(User::get());
    }
     public function store(Request $request)
    {
          User::create([
            'name' => $request->name,
            'email'  => $request->email,
            'password' => bcrypt($request->password)

          ]);
          return response()->json('successfuly created');
    }
    public function login(Request $req){
      $user = User::where("email",$req->email)->first();
      if(!$user || !Hash::check($req->password,$user->password))
      {
        return ["error"=>"Email ou mot de passe invalide"];
      }
         return $user;
    }

}
