<footer class="text-center py-4 mt-auto w-full">
    © 2025 Mon Portfolio. Tous droits réservés.
</footer>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        const footer = document.querySelector("footer");
        const body = document.body;
        if (body.offsetHeight < window.innerHeight) {
            footer.style.position = "absolute";
            footer.style.bottom = "0";
        }
    });
</script>
