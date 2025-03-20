function hideHeader() {
    var header = document.getElementById('header');
    var navbar = document.getElementById('navbar');

    // Hide the header
    header.style.display = 'none';

    // Move the navbar up
    navbar.style.top = '0';
}
