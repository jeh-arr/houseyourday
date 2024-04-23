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
        'price',
        'availability',
        'bathroom',
        'kitchen',
        'other',
        'image',
        'rules',
        'curfew',
    ];

}
