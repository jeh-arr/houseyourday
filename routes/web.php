<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\NewLandlordController;
use App\Http\Controllers\LandlordController;

use App\Http\Controllers\ListingController;
use App\Http\Controllers\RenterController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/landlord', [NewLandlordController::class, 'index'])->name('landlord.index');
    Route::get('/landlord/create', [NewLandlordController::class, 'create'])->name('landlord.create');
    
    Route::post('/listing', [ListingController::class,'store'])->name('landlord.store');

    Route::get('/landlord/{id}', [NewLandlordController::class,'show'])->name('landlord.show');
    
    Route::get('/renter', [RenterController::class, 'index'])->name('renter.index');
    Route::get('/renter/{id}', [RenterController::class, 'show'])->name('renter.show');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
