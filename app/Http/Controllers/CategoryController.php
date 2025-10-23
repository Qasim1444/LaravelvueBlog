<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
   public function index()
   {
       $categories = Category::all();
       return response()->json($categories);
   }
   public function store(Request $request)
   {
       $request->validate([
           'name' =>'required'
       ]);
       $category=Category::create(['name' => $request->name]);
       return response()->json($category);
   }
   public function update(Request $request)
   {
       $request->validate([
           "name" =>'required'
       ]);
       $category=Category::create(['name' => $request->name]);
       return response()->json($category);
   }


}
