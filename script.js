let menu = document. querySelector ('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList. toggle('bx-x');
    navbar.classList. toggle('active');
}

window.onscroll = () => {
    menu.classList.remove ('bx-x');
    navbar.classList. remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Boilermaker', 'Fabricator', 'Fitter', 'Qualified', 'Welder'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,

});

function sendEmail(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let mailtoLink = `mailto:rahmatagengyuwana@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n\n" +
        "Message:\n" + message
    )}`;

    // buka email client
    window.location.href = mailtoLink;

    // notif
    alert("Message Sent ✅");
}

// Ambil semua tombol filter
const filterButtons = document.querySelectorAll('#portfolio-flters li');
const portfolioItems = document.querySelectorAll('.portfolio-item');

// Loop untuk tiap tombol
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Hapus class active dari semua tombol
        filterButtons.forEach(btn => btn.classList.remove('filter-active'));
        // Tambahkan class active ke tombol yang diklik
        button.classList.add('filter-active');

        const filterValue = button.getAttribute('data-filter');

        // Tampilkan / sembunyikan portfolio item
        portfolioItems.forEach(item => {
            if (filterValue === '*' || item.classList.contains(filterValue.slice(1))) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if(window.scrollY > 300){ 
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

if(window.scrollY > 100){ backToTop.classList.add('active'); }