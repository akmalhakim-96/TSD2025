
// JavaScript untuk fungsi kembang/kecut (accordion)
const collapsibleHeaders = document.querySelectorAll('.collapsible-header');

collapsibleHeaders.forEach(header => {
    header.addEventListener('click', function() {
        // Toggle kelas 'active' pada header
        this.classList.toggle('active');

        // Dapatkan kandungan yang berkaitan
        const content = this.nextElementSibling; // Ini adalah .collapsible-content

        // Toggle kelas 'show' untuk memaparkan/menyembunyikan kandungan dengan animasi
        if (content.classList.contains('show')) {
            content.classList.remove('show');
        } else {
            content.classList.add('show');
        }
    });
});
