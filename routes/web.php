<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

// Dashboard Route
Route::get('/dashboard', function () {
    $user = Auth::user()->load('images'); 

    $imagePath = $user->images->first()?->image_path;
    
    if ($imagePath && !Storage::disk('public')->exists($imagePath)) {
        $imagePath = 'photo.jpg'; 
    }

    return Inertia::render('Dashboard', [
        'auth' => [
            'user' => $user,
            'imagePath' => $imagePath
        ],
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

// Storage Debug Route (optional, for debugging purposes)
Route::get('/storage-debug', function () {
    return response()->json([
        'link_exists' => is_link(public_path('storage')),
        'real_path' => realpath(public_path('storage')),
        'storage_path' => storage_path('app/public'),
    ]);
})->name('storage.debug');

// Franchisee Dashboard Route
Route::get('/franchiseeDashboard', function () {
    return Inertia::render('franchiseeDashboard');
})->middleware(['auth', 'verified'])->name('franchiseeDashboard');

// Home Page Route
Route::get('/', function () {
    return Inertia::render('HomePage');
})->name('home');

// Profile Management Routes
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Authentication Routes
require __DIR__ . '/auth.php';
