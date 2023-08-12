<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prixautre extends Model
{
    use HasFactory;

    protected  $table = 'prixautres' ;

    protected $fillable = [

       'designation',
       'price',
    ];
}
