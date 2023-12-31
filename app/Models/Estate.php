<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estate extends Model
{
    use HasFactory;

    protected $fillable = [
        'property_type',
        'style_of_home',
        'price',
        'bedroom',
        'bathroom',
        'size',
        'accessibility_features',
    ];
}
