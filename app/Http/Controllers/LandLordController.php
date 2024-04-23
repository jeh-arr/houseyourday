<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Inertia\Inertia;

class LandLordController extends Controller
{
    public function index()
    {
        return Inertia::render('Landlord/index', );
    }
    public function create()
    {
        return Inertia::render('Landlord/addlisting', );
    }

}
