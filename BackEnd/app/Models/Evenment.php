<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evenment extends Model
{
    use HasFactory;

    protected $table = 'evenment' ;
    protected $fillable = [
        'title',
        'descriptions',
        'descriptions2',
         'images_videos',
        'coms',
        'likes',
    ];
}

