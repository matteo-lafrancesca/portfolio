@extends('layouts.app')

@section('content')
<div class="max-w-7xl mx-auto py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div class="max-w-full">
            <h2 class="text-4xl md:text-5xl font-bold text-primary">Bienvenue sur mon Portfolio</h2>
            <p class="text-lg text-neutral mt-4 leading-relaxed">
                Je m'appelle <span class="text-secondary font-semibold">Mattéo Lafrancesca</span>, j'ai 20 ans et je prépare un <span class="text-secondary font-semibold">BTS SIO</span>.
                Passionné par le <span class="text-secondary font-semibold">développement web</span>, je souhaite poursuivre mes études avec un 
                <span class="text-secondary font-semibold">Bachelor en développement web</span> afin de perfectionner mes compétences et concrétiser mes projets.
            </p>
            <div class="mt-6">
                <a href="projets" class="btn btn-primary btn-lg">Découvrir mes projets</a>
            </div>
        </div>
        <div class="flex justify-center">
            <img src="{{ asset('images/illustration.jpg') }}">
        </div>
    </div>
</div>
@endsection
