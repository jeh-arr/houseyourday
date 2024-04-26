<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Listing;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

class WelcomeController extends Controller
{
    public function start()
    {
        
        $listings = Listing::with('user')->get();
        return Inertia::render('Welcome' , [
            'listing' => $listings,
        ]);
    }

}
