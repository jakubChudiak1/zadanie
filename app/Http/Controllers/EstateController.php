<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Estate;

class EstateController extends Controller
{
    public function index(){
        $estates = Estate::all();
        $estatesCount = Estate::count();
        return view("home",compact(["estates","estatesCount"]));
    }
}
