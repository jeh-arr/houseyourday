<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Listing;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

class RenterController extends Controller
{
    public function index()
    {
        
        $listings = Listing::with('user')->get();
        return Inertia::render('Renter/index' , [
            'listing' => $listings,
        ]);
    }

    public function show(Request $request, $id)
    {
        $listing = Listing::with('user')->find($id);
        
        return Inertia::render('Renter/listingdetails', [
            'listing' => $listing,
        ]);
    }
}
