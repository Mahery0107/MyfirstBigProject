<?php

namespace App\Models;

use App\Models\User;
use App\Models\Likeactu;
use App\Models\Commentactu;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Actu extends Model
{
    use HasFactory;

    protected $table = 'plusdactus';

    protected $fillable = [
        'titres',
        'extraits',
        'descriptions',
        'videos',
     ];

     public function user(){
        return $this->belongsTo(User::class);
    }

    public function comments(){
        return $this->hasMany(Commentactu::class);
    }

    public function likes(){
        return $this->belongsToMany(User::class, 'likeactus');
    }
}
