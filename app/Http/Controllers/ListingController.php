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
    public function store(Request $request ) : RedirectResponse
    {

        $request->validate([
            'property_name' => 'required',
            'property_address'=> 'required',
            
            'price'=> 'required',
            'availability'=> 'required',
        
        
        
            
        ]);

        $image = $request->file('image')->store('images', 'public');
        $property = Listing::create([
            'property_name' => $request->property_name,
            'property_address'=> $request->property_address,
            
            'price'=> $request->price,
            'availability'=> $request->availability,
            'user_id' => $request->user_id,

            'bathroom' => $request->bathroom,
            'kitchen'=> $request->kitchen,
            'other'=> $request->other,
            'image'=> $image,
            'rules'=> $request->rules,
            'curfew'=> $request->curfew,

            
            
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
            'bathroom' => $request->bathroom,
            'kitchen'=> $request->kitchen,
            'other'=> $request->other,
            
            'rules'=> $request->rules,
            'curfew'=> $request->curfew,
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
}
