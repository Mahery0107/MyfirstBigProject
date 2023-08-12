<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VehiculeController;
use App\Http\Controllers\JointableController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|->

Route::get('/', function () {
    return view('welcome');
} );
/*Route::get('/', [VehiculeController::class, 'accueil'])->name('/');
Route::get('ajouter/vehicule', [VehiculeController::class, 'show'])->name('ajouter/vehicule');
Route::post('enrgistrer.vehicule', [VehiculeController::class, 'create'])->name('enrgistrer.vehicule');
Route::get('liste/vehicule', [VehiculeController::class, 'index'])->name('liste/vehicule');
Route::get('modifier/vehicule/{id}', [VehiculeController::class, 'modifier'])->name('modifier/vehicule');
Route::post('editer.vehicule/{id}', [VehiculeController::class, 'update'])->name('editer.vehicule');
Route::get('delete/vehicule/{id}', [VehiculeController::class, 'delete'])->name('delete/vehicule');
Route::get('voir/vehicule/{id}', [VehiculeController::class, 'voir'])->name('voir/vehicule');
*/



Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('join_table', [JointableController::class, 'index']);
