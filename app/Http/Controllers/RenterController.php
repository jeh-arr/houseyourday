<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class RenterController extends Controller
{
    public function index()
    {
        return Inertia::render('Renter/index', );
    }
}
