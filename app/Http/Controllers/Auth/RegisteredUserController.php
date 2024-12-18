<?php

namespace App\Http\Controllers\Auth;

use App\Models\UserImage;
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
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'user_role' => 'required|string|in:franchisor,franchisee',
            'password' => 'required|string|min:8|confirmed',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
    
        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'user_role' => $validatedData['user_role'],
            'password' => Hash::make($validatedData['password']),
        ]);
    
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('profile_images', 'public');
    
            UserImage::create([
                'user_id' => $user->id,
                'image_type' => 'profile',
                'image_path' => $imagePath,
            ]);
        }
    
        Auth::login($user);
    

        if ($user->user_role == 'franchisor') {
            return redirect(route('dashboard', absolute: false));
        }
        if ($user->user_role == 'franchisee') {
            return redirect(route('franchiseeDashboard', absolute: false));
        }

        return redirect(route('home', absolute: false));
    }
}
