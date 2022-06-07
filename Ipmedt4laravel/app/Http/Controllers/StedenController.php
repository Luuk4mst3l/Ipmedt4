<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Steden;

class StedenController extends Controller
{
    public function index(){
        return Steden::all();
    }
}
