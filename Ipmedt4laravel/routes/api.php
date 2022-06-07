<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\StedenController;

// Public Routes
Route::get('/steden', [StedenController::class, 'index']);
