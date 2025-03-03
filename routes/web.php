<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/', function () { return view('welcome'); })->name('home');
Route::get('/projets', function () { return view('projets'); })->name('projets');
Route::get('/competences', function () { return view('competences'); })->name('competences');
Route::get('/contact', function () { return view('contact'); })->name('contact');
Route::get('/cv', function () { return view('cv'); })->name('cv');
