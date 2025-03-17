<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

// Page d'accueil
Route::get('/', function () {
    return view('welcome');
})->name('home');

// Pages statiques
Route::get('/projets', function () {
    return view('projets');
})->name('projets');

Route::get('/competences', function () {
    return view('competences');
})->name('competences');

Route::get('/cv', function () {
    return view('cv');
})->name('cv');

// Routes du formulaire de contact
Route::get('/contact', [ContactController::class, 'show'])->name('contact.show');
Route::post('/contact', [ContactController::class, 'send'])->name('contact.send');

Route::get('/projets/onswim', function () {return view('projets.natation');})->name('projets.onswim');