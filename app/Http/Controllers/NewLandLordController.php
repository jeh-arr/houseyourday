<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\Listing;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

use Illuminate\Support\Facades\Redirect;

class NewLandLordController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $listings = Listing::where('user_id', $user->id)->get();
        return Inertia::render('Landlord/index', [
            'listing' => $listings,
        ]);
    }
    public function create()
    {
        return Inertia::render('Landlord/addlisting', );
    }
    
    public function show(Request $request, $id)
    {
        $listing = Listing::find($id);
        
        return Inertia::render('Landlord/listingdetails', [
            'listing' => $listing,
        ]);
    }

    public function update(Request $request, $id)
    {
        
    }
}
