<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Listing;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

use Illuminate\Support\Facades\Redirect;

class AdminController extends Controller
{
    public function index()
    {
        
        $listings = Listing::where('Status', 'Pending')->get();
        return Inertia::render('Admin/Propertylist', [
            'listing' => $listings,
        ]);
    }
    
    
    public function show(Request $request, $id)
    {
        $listing = Listing::find($id);
        
        return Inertia::render('Admin/listingdetail', [
            'listing' => $listing,
        ]);
    }
}
