<header class="w-full bg-base-100 shadow-md border-b border-neutral-200">
    <div class="max-w-6xl mx-auto px-8 py-6">
        <nav class="flex justify-between items-center">
            <!-- Logo / Accueil -->
            <a href="{{ route('home') }}" class="text-3xl font-bold text-primary hover:text-primary focus:outline-none transition-all duration-300 tracking-wide transform hover:scale-105">Mattéo Lafrancesca</a>

            <!-- Navigation principale -->
            <div class="space-x-8 text-lg">
                <a href="{{ route('home') }}" class="relative text-base-content hover:text-primary group">
                    Accueil
                    <!-- Soulignement animé -->
                    <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
                </a>
                <a href="{{ route('projets') }}" class="relative text-base-content hover:text-primary group">
                    Projets
                    <!-- Soulignement animé -->
                    <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
                </a>
                <a href="{{ route('competences') }}" class="relative text-base-content hover:text-primary group">
                    Compétences
                    <!-- Soulignement animé -->
                    <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
                </a>
                <a href="{{ route('contact.show') }}" class="relative text-base-content hover:text-primary group">
                    Contact
                    <!-- Soulignement animé -->
                    <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
                </a>
                <a href="{{ route('cv') }}" class="relative text-base-content hover:text-primary group">
                    CV
                    <!-- Soulignement animé -->
                    <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
                </a>
            </div>
        </nav>
    </div>
</header>
