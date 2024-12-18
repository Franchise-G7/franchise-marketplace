<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserImage extends Model
{
    protected $fillable = [
        'image_type', 'image_path', 'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
