// Typed.js Animation Initialization
const typed = new Typed('.typing', {
    strings: ['CEO of Aledad computer services', 'Website Developer', 'UI Designer', 'Content Creator', 'Teacher','MS Office Trainer'],
    typeSpeed: 100, // How fast it types
    backSpeed: 60,  // How fast it deletes
    backDelay: 1000, // How long it stays before deleting
    loop: true      // Keep looping forever
});

/* Scroll Sections Active Link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

/* Sticky Navbar */
let header = document.querySelector('.header');

window.onscroll = () => {
    // Existing active link logic...
    // (Keep the code I gave you in the previous step here)

    // Sticky effect
    header.classList.toggle('sticky', window.scrollY > 100);
};
