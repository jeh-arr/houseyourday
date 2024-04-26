<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    use HasFactory;


    protected $fillable = [
        'property_name',
        'property_address',
        
        'user_id',
        'availability',
        'description',
        'rooms',
        'price',
        'other',
        'image',
        
    ];

    protected $casts = [

         'image' => 'array',
    ];
    

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
