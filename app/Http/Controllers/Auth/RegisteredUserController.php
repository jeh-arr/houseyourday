<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'phone' => 'required',
            //'birthdate' => 'required',
            'usertype' => 'required',
            'gender' => 'required',
            'city' => 'required',
            'address' => 'required',
            'postal' => 'required',
            
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone,
            'birthdate' => '12/12/12',
            'usertype' => $request->usertype,
            'gender' => $request->gender,
            'city' => $request->city,
            'address' => $request->address,
            'postal' => $request->postal,
            
        ]);

        event(new Registered($user));

        Auth::login($user);
        
        if ($user->usertype == 'Landlord') {
            return redirect(route('landlord.index', absolute: false));
        }
        if ($user->usertype =='Renter') {
            return redirect(route('renter.index', absolute: false));
        }

        
    }
}
