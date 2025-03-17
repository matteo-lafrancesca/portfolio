@extends('layouts.app')

@section('content')
<div class="max-w-7xl mx-auto py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <!-- Section Coach -->
        <div class="max-w-full">
            <h2 class="text-4xl md:text-5xl font-bold text-primary">Bienvenue sur votre espace coach</h2>
            <p class="text-lg text-neutral mt-4 leading-relaxed">
                En tant que coach, vous pouvez créer des <span class="text-secondary font-semibold">programmes d'entraînement</span>, 
                <span class="text-secondary font-semibold">suivre les progrès de vos athlètes</span>, et gérer facilement leurs exercices.
                Attribuez des exercices et des programmes à vos athlètes pour un suivi personnalisé.
            </p>
        </div>
        <!-- Illustration -->
        <div class="flex justify-center">
            <img src="{{ asset('images/coach_dashboard.jpg') }}" alt="Dashboard Coach" class="max-w-md rounded-lg shadow-xl">
        </div>
    </div>

    <div class="mt-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <!-- Section Athlète -->
        <div class="max-w-full">
            <h2 class="text-4xl md:text-5xl font-bold text-primary">Bienvenue sur votre espace athlète</h2>
            <p class="text-lg text-neutral mt-4 leading-relaxed">
                Suivez vos <span class="text-secondary font-semibold">programmes d'entraînement</span> et <span class="text-secondary font-semibold">choisissez vos exercices</span>.
                Une fois les exercices terminés, cochez-les pour tenir votre coach informé de votre progression.
            </p>
        </div>
        <!-- Illustration -->
        <div class="flex justify-center">
            <img src="{{ asset('images/athlete_dashboard.jpg') }}" alt="Dashboard Athlète" class="max-w-xs rounded-lg shadow-xl">
        </div>
    </div>
</div>
@endsection
