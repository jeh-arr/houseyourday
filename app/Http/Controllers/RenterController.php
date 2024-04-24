<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Listing;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

class RenterController extends Controller
{
    public function index()
    {
        
        $listings = Listing::all();
        return Inertia::render('Renter/index' , [
            'listing' => $listings,
        ]);
    }
}
