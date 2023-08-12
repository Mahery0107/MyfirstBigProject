<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;



class AuthController extends Controller
{
    public function register(Request $request)
    {


        $user = User::create([
            'name'  => $request->name,
            'email'  => $request->email,
            'role'  => $request->role,
            'password'  => Hash::make($request->password),
        ]);
        $token = $user->createToken($user->email . '_Token')->plainTextToken;

        return response()->json([
            "status" => 200,
            "username" => $user->name,
            "token" => $token,
            "message" => "Compte créé",
        ]);
    }

    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();





        if (!$user || !Hash::check($request->password, $user->password)) {

            return response()->json([
                "status" => 401,
                "message" => "Invalide",
            ]);
        } else {
            $token = $user->createToken($user->email . '_Token')->plainTextToken;

            return response()->json([
                "status" => 200,
                "username" => $user->name,
                "token" => $token,
                "role"  => $user->role,
                "message" => "connexion réussie",

            ]);
        }
    }


}
