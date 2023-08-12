<?php

namespace App\Models;

use App\Models\Actu;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Likeactu extends Model
{
    use HasFactory;

    protected $table = 'likeactus' ;

    protected $fillable = [
        'actu_id',
        'user_id',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function actu()
    {
        return $this->belongsTo(Actu::class);
    }
}
