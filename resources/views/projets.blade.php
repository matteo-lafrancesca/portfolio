@extends('layouts.app')

@section('content')
    <div class="text-center py-8">
        <h2 class="text-4xl md:text-5xl font-bold text-primary">Mes Projets</h2>
        <p class="text-lg text-neutral mt-4 leading-relaxed">Voici quelques projets sur lesquels j'ai travaillé.</p>
    </div>

    <!-- Section Projets -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-13">
        <!-- Projet Natation -->
        <div class="card bg-base-100 w-96 shadow-sm transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
            <a href="{{ route('projets.onswim') }}" class="block h-full">
                <figure>
                    <img src="{{ asset('images/natation.jpg') }}" alt="Natation" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Onswim
                        <!-- Badge Laravel -->
                        <div class="badge badge-error">Laravel</div>
                    </h2>
                    <p>Un projet s'inscrivant dans le domaine de la natation, visant à accompagner les coachs et les athlètes dans la gestion des programmes sportifs.</p>
                </div>
            </a>
        </div>

        <!-- Projet Bot Discord -->
        <div class="card bg-base-100 w-96 shadow-sm transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
            <a href="#" class="block h-full">
                <figure>
                    <img src="{{ asset('images/bot_discord.jpg') }}" alt="Bot Discord" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Mattébot
                        <!-- Badge Node.js -->
                        <div class="badge badge-success">Node.js</div>
                    </h2>
                    <p>Un bot développé pour gérer les rôles et interagir avec les utilisateurs sur Discord de manière simple et efficace.</p>
                </div>
            </a>
        </div>

        <!-- Projet Jeu de Tower Defense -->
        <div class="card bg-base-100 w-96 shadow-sm transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
            <a href="#" class="block h-full">
                <figure>
                    <img src="{{ asset('images/tower_defense.jpg') }}" alt="Tower Defense" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Dungeon Defender Royale 2
                        <!-- Badge Python -->
                        <div class="badge badge-primary">Python</div>
                    </h2>
                    <p>Un petit jeu de Tower Defense utilisant la bibliothèque Pygame.</p>
                </div>
            </a>
        </div>
    </div>
@endsection
