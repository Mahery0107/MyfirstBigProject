<?php

namespace App\Models;

use App\Models\Actu;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Commentactu extends Model
{
    use HasFactory;

     protected $table = 'commentsactus' ;
    protected $fillable = [
        'user_id',
        'actu_id',
        'contents',
    ];

    public function actu()
    {
        return $this->belongsTo(Actu::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
