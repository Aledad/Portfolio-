/* General Reset */
* {
    margin: 0; padding: 0;
    box-sizing: border-box;
    text-decoration: none; border: none; outline: none;
    scroll-behavior: smooth;
    font-family: 'Poppins', sans-serif;
}

:root {
    --bg-color: #1f242d;
    --second-bg-color: #323946;
    --text-color: #fff;
    --main-color: #32ff00; /* Neon Lime Green */
}

body {
    background: var(--bg-color);
    color: var(--text-color);
    overflow-x: hidden;
}

/* Header Navigation */
.header {
    position: fixed;
    top: 0; left: 0; width: 100%;
    padding: 2rem 9%;
    background: rgba(31, 36, 45, 0.85);
    backdrop-filter: blur(10px);
    display: flex; justify-content: space-between; align-items: center;
    z-index: 100;
}

.logo { font-size: 2.5rem; color: var(--text-color); font-weight: 700; }
.logo span { color: var(--main-color); }

.navbar a {
    font-size: 1.1rem; color: var(--text-color);
    margin-left: 2.5rem; transition: .3s;
}

.navbar a:hover, .navbar a.active { color: var(--main-color); }

/* Hero Section */
.home {
    display: flex; justify-content: space-between; align-items: center;
    height: 100vh; padding: 0 9%;
}

.home-content { max-width: 600px; }
.home-content h1 { font-size: 4rem; font-weight: 700; line-height: 1.2; }
.home-content h3 { font-size: 2.2rem; font-weight: 700; margin: 0.5rem 0; }
.typing { color: var(--main-color); }

.home-content p { font-size: 1rem; margin: 2rem 0; line-height: 1.6; }

/* Buttons & Socials */
.btn {
    display: inline-block; padding: 1rem 2.8rem;
    background: var(--main-color); border-radius: 4rem;
    box-shadow: 0 0 1rem var(--main-color);
    font-size: 1.1rem; color: var(--bg-color);
    font-weight: 600; transition: .5s ease;
}

.btn:hover { box-shadow: none; transform: scale(1.05); }

.social-media a {
    display: inline-flex; justify-content: center; align-items: center;
    width: 2.8rem; height: 2.8rem;
    background: transparent; border: .15rem solid var(--main-color);
    border-radius: 50%; font-size: 1.2rem; color: var(--main-color);
    margin: 2rem 1rem 0 0; transition: .5s ease;
}

.social-media a:hover {
    background: var(--main-color); color: var(--bg-color);
    box-shadow: 0 0 1rem var(--main-color);
}

/* Perfect Circular Image with Glow Animation */
.home-img {
    position: relative;
    width: 420px; height: 420px;
    display: flex; justify-content: center; align-items: center;
}

.glowing-circle {
    position: relative;
    width: 100%; height: 100%;
    border-radius: 50%;
    display: flex; justify-content: center; align-items: center;
}

/* The Animated Spinning Ring */
.glowing-circle::after {
    content: '';
    position: absolute;
    width: 100%; height: 100%;
    border-radius: 50%;
    border: 5px solid transparent;
    border-top: 5px solid var(--main-color);
    border-bottom: 5px solid var(--main-color);
    animation: circleRotate 8s linear infinite;
    box-shadow: 0 0 20px var(--main-color);
}

@keyframes circleRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.image-box {
    width: 380px; height: 380px;
    border-radius: 50%;
    overflow: hidden;
    z-index: 1;
    border: 2px solid var(--main-color);
}

.image-box img {
    width: 100%; height: 100%;
    object-fit: cover;
    object-position: center;
}

/* Responsive (Mobile) */
@media (max-width: 991px) {
    .home { flex-direction: column-reverse; text-align: center; height: auto; padding: 10rem 9% 4rem; }
    .home-img { width: 320px; height: 320px; margin-bottom: 3rem; }
    .image-box { width: 280px; height: 280px; }
    .home-content h1 { font-size: 3rem; }
}

/* Services Section */
.services {
    min-height: 100vh;
    padding: 10rem 9% 2rem;
    background: var(--second-bg-color);
}

.heading {
    text-align: center;
    font-size: 4.5rem;
    margin-bottom: 5rem;
}

.heading span { color: var(--main-color); }

.services-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
}

.services-box {
    flex: 1 1 30rem;
    background: var(--bg-color);
    padding: 3rem 2rem 4rem;
    border-radius: 2rem;
    text-align: center;
    border: .2rem solid var(--bg-color);
    transition: .5s ease;
}

.services-box:hover {
    border-color: var(--main-color);
    transform: scale(1.02);
}

.services-box i { font-size: 7rem; color: var(--main-color); }
.services-box h3 { font-size: 2.6rem; }
.services-box p { font-size: 1.1rem; margin: 1rem 0 3rem; }

/* Contact Section */
.contact {
    padding: 10rem 9% 10rem;
}

.contact form {
    max-width: 70rem;
    margin: 1rem auto;
    text-align: center;
    margin-bottom: 3rem;
}

.contact form .input-box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.contact form .input-box input,
.contact form textarea {
    width: 100%;
    padding: 1.5rem;
    font-size: 1.6rem;
    color: var(--text-color);
    background: var(--second-bg-color);
    border-radius: .8rem;
    margin: .7rem 0;
}

.contact form .input-box input { width: 49%; }

.contact form textarea { resize: none; }

/* Footer */
.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem 9%;
    background: var(--second-bg-color);
}

.footer-text p { font-size: 1.1rem; }

.footer-iconTop a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: .8rem;
    background: var(--main-color);
    border-radius: .8rem;
    transition: .5s ease;
}

.footer-iconTop a:hover { box-shadow: 0 0 1rem var(--main-color); }
.footer-iconTop a i { font-size: 2.4rem; color: var(--second-bg-color); }

.header.sticky {
    background: var(--bg-color);
    border-bottom: .1rem solid rgba(0, 0, 0, .2);
    box-shadow: 0 0 1rem var(--main-color);
}

.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem 9%;
    background: var(--second-bg-color);
}

.footer-image img {
    width: 80px; /* Adjust this size as needed */
    height: auto;
    filter: drop-shadow(0 0 5px var(--main-color)); /* Adds a slight neon glow to the logo */
    margin-bottom: 1rem;
}

/* Ensure the text and image stack nicely on mobile */
@media (max-width: 768px) {
    .footer {
        flex-direction: column;
        gap: 2rem;
    }
}
