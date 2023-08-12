<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicule extends Model
{
    use HasFactory;
    protected $fillable = [
        'nom_v',
        'type',
        'marque',
        'num_pla',
        'dde',
        'nom_prop',
        'prenom',
        'ddn',
        'adress',
        'num_cin'
    ];
}
