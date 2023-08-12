<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prixservice extends Model
{
    use HasFactory;

    protected $table = 'prixservices';

    protected $fillable = [
        'services',
          'options',
          'unites',
           'price',
    ];
}
