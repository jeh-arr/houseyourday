<?php

namespace App\Http\Controllers;


use App\Models\User;
use App\Models\Listing;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
class ListingController extends Controller
{
    public function store(Request $request): RedirectResponse
{
    $request->validate([
        'property_name' => 'required',
        'property_address' => 'required',
        'price' => 'required',
        'availability' => 'required',
        'image.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048', // Validate each image
    ]);

    $images = [];

    if ($request->hasFile('image')) {
        foreach ($request->file('image') as $file) {
            $path = $file->store('images', 'public');
            $images[] = $path;
            
        }
    }

    $property = Listing::create([
        'property_name' => $request->property_name,
        'property_address' => $request->property_address,
        'price' => $request->price,
        'availability' => $request->availability,
        'user_id' => $request->user_id,
        'price' => $request->price,
        'description' => $request->description,
        'rooms' => $request->rooms,
        'status' => 'Pending',
        'permit' => $request->permit,
        'image' => json_encode($images), // Convert array to JSON string
        
    ]);

    return Redirect::route('landlord.index');
}

    public function update(Request $request, Listing $listing)
    {

        $listing->update([
            'property_name' => $request->property_name,
            'property_address'=> $request->property_address,
            
            'price'=> $request->price,
            'availability'=> $request->availability,
            
            
            'description' => $request->description,
            'rooms' => $request->rooms,
            'status' => $request->status,
        ]);
        //return Redirect::route('landlord.index');
    }

    public function adminupdate(Request $request, Listing $listing)
    {

        $listing->update([
            
            'status' => 'Approved',
            
        ]);
        //return Redirect::route('landlord.index');
    }

    public function destroy(Listing $listing): RedirectResponse
    {
        // Delete the listing
        $listing->delete();

        // Redirect back to the landlord index page
        return Redirect::route('landlord.index');
    }

    public function admindestroy(Listing $listing): RedirectResponse
    {
        // Delete the listing
        $listing->delete();

        // Redirect back to the landlord index page
        return Redirect::route('landlord.index');
    }
}
