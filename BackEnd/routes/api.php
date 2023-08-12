<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ActuController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\OffreController;
use App\Http\Controllers\EntiteController;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\ComposantController;
use App\Http\Controllers\JointableController;
use App\Http\Controllers\API\EvenmtController;
use App\Http\Controllers\API\HeaderController;
use App\Http\Controllers\API\FontendController;
use App\Http\Controllers\DescriptionController;
use App\Http\Controllers\PrixserviceController;
use App\Http\Controllers\PrixformationController;
use App\Http\Controllers\PrixotherController;
use App\Http\Controllers\ViewController;

Route::get('debug', [JointableController::class, 'index']);

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::post('add-offres', [OffreController::class, 'store']);
Route::get('offres', [OffreController::class, 'index']);
Route::delete('delete_offre/{id}', [OffreController::class, 'destroy'])->name('delete_offre');
Route::get('all-offres', [OffreController::class, 'allOffres']);
 Route::get('edit-offre/{offre_id}', [OffreController::class, 'edit']);
 Route::put('update-offre/{offre_id}', [OffreController::class, 'update']);
 Route::get('get_offre/{nom_offres}', [OffreController::class, 'eachOffre']);

Route::get('get-header', [FontendController::class, 'header']);
Route::get('get_actus', [FontendController::class, 'actus']);
Route::get('get-evenment', [FontendController::class, 'evenment']);
Route::get('get-offre', [FontendController::class, 'offre']);
Route::get('get-price', [FontendController::class, 'prix']);

Route::post('add-entite', [EntiteController::class, 'store']);
Route::get('all-entite', [EntiteController::class, 'allEntite']);

Route::post('add-prixformation', [PrixformationController::class, 'store']);
Route::get('prices', [PrixformationController::class, 'index']);

Route::post('add-priceService', [PrixserviceController::class, 'store']);
Route::post('add_priceother', [PrixotherController::class, 'store']);

Route::get('services', [PrixserviceController::class, 'index']);
Route::get('others', [PrixotherController::class, 'index']);

Route::post('add-component', [ComposantController::class, 'store']);
Route::get('all-composant', [ComposantController::class, 'allComposant']);

Route::post('add-description', [DescriptionController::class, 'store']);
Route::get('all-description', [DescriptionController::class, 'allDescription']);

Route::get('sliders', [SliderController::class, 'index']);
Route::post('add_slider', [SliderController::class, 'store']);
Route::delete('delete-slider/{id}', [SliderController::class, 'destroy']);
Route::get('edit-slider/{id}', [SliderController::class, 'edit']);
Route::put('update-slider/{id}', [SliderController::class, 'update']);
 //Header

Route::get('headers', [HeaderController::class, 'index']);
Route::resource('header', HeaderController::class);

Route::get('edit-header/{id}', [HeaderController::class, 'edit']);
Route::get('show-header/{id}', [HeaderController::class, 'show']);

Route::delete('delete-Header/{id}', [HeaderController::class, 'destroy']);
 //End--Header

 // Evnmt
 Route::post('add-evenmt', [EvenmtController::class, 'store']);
 Route::get('evenments', [EvenmtController::class, 'index']);
 Route::get('edit-evenment/{id}', [EvenmtController::class, 'edit']);
Route::get('show-evenment/{id}', [EvenmtController::class, 'show']);
 Route::put('update-evenment/{id}', [EvenmtController::class, 'update']);
 Route::delete('delete-Evenment/{id}', [EvenmtController::class, 'destroy']);
  //End-Evnmt
  Route::post('add_actus', [JointableController::class, 'store']);
 Route::get('edit-actus/{id}', [JointableController::class, 'edit']);
 //comment
 Route::get('get-coms/{id}', [CommentController::class, 'show_coms']);
 Route::get('edit_comms/{id}', [CommentController::class, 'edit']);
Route::put('update_coms/{id}', [CommentController::class, 'update']);
Route::delete('delete-coms/{id}', [CommentController::class, 'destroy']);
 //End-comment

 Route::get('get-comments/{id}', [ActuController::class, 'show_comms']);
 Route::delete('delete-comms/{id}', [ActuController::class, 'destroy']);
 Route::get('edit_actus_coms/{id}', [ActuController::class, 'edit']);
 Route::put('update_actu_coms/{id}', [ActuController::class, 'update']);
 Route::get('actualités', [ActuController::class, 'index']);
Route::delete('delete_actus/{id}', [ActuController::class, 'delete']);


 Route::get('get-like/{id}', [PostController::class, 'all_likes']);
 Route::get('get_likes/{id}', [ActuController::class, 'all_likesactus']);

 Route::get('essaie', [OffreController::class, 'trygrup']);

 Route::middleware('auth:sanctum')->group(function () {

     Route::post('add_likes/{id}', [PostController::class, 'like'])->name('add_likes');
      Route::post('likes_actus/{id}', [ActuController::class, 'likes'])->name('likes_actus');
      Route::get('whoami', [AuthController::class, 'whoami']);

     Route::get('/checkingAuthenticated', function () {
        return response()->json(['message'=>'You are in', 'status'=>200],200);
    });



    Route::post('add-coms', [CommentController::class, 'store']);
Route::post('add-coments ', [ActuController::class, 'store']);

    Route::post('logout', [AuthController::class, 'logout']);
});


//Route::middleware('auth:api')->get('/user', function (Request $request) {
  //  return $request->user();
// });

//Email Route which we used in angular http service
Route::post('views_pages', [ViewController::class, 'views']);




