<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Portfolio</title>
    @vite('resources/css/app.css')
</head>
<body class="bg-base-100 text-base-content min-h-screen grid grid-rows-[auto_1fr_auto]">

    @include('layouts.header')

    <main class="max-w-7xl mx-auto px-4 md:px-8 py-8 w-full">
        @yield('content')
    </main>

    @include('layouts.footer')

</body>
</html>
