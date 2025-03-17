@extends('layouts.app')

@section('content')
    <div class="text-center py-12">
        <h2 class="text-4xl md:text-5xl font-bold text-primary">Mon CV</h2>
        <p class="text-lg text-neutral mt-4 leading-relaxed">Téléchargez mon CV en cliquant sur le lien ci-dessous.</p>
        <a href="{{ asset('storage/cv.pdf') }}" class="btn btn-primary mt-4" download>Télécharger mon CV</a>
    </div>
@endsection
