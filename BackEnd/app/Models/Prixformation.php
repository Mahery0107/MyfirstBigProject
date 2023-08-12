<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prixformation extends Model
{
    use HasFactory;

    protected $table = 'prixformation';

    protected $fillable = [
         'designation',
         'Niveau',
         'Prix',

    ];
}
