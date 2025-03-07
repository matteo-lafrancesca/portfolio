@extends('layouts.app')

@section('content')
    <div class="max-w-2xl mx-auto p-6 bg-base-200 text-base-content rounded-lg shadow-lg">
        <h2 class="text-3xl font-bold text-center text-primary">Contact</h2>
        <p class="text-center mt-2">Vous pouvez me contacter via ce formulaire.</p>

        @if(session('success'))
            <div class="alert alert-success mt-4">
                <span>{{ session('success') }}</span>
            </div>
        @endif

        <form action="{{ route('contact.send') }}" method="POST" class="mt-6 space-y-4">
            @csrf

            <div class="form-control">
                <label class="label">
                    <span class="label-text">Nom</span>
                </label>
                <input type="text" name="name" class="input input-bordered w-full bg-white focus:ring focus:ring-primary">
                                @error('name') <p class="text-error text-sm mt-1">{{ $message }}</p> @enderror
            </div>

            <div class="form-control">
                <label class="label">
                    <span class="label-text">Email</span>
                </label>
                <input type="email" name="email" class="input input-bordered w-full bg-base-100">
                @error('email') <p class="text-error text-sm mt-1">{{ $message }}</p> @enderror
            </div>

            <div class="form-control">
                <label class="label">
                    <span class="label-text">Message</span>
                </label>
                <textarea name="message" class="textarea textarea-bordered w-full bg-base-100" rows="4"></textarea>
                @error('message') <p class="text-error text-sm mt-1">{{ $message }}</p> @enderror
            </div>

            <button type="submit" class="btn btn-primary w-full">
                Envoyer
            </button>
        </form>
    </div>
@endsection
