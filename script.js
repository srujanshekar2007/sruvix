// DARK MODE
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
    document.body.classList.toggle("dark");
    toggle.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
};

// GSAP ANIMATIONS
gsap.from(".logo", { y: -40, opacity: 0, duration: 1 });
gsap.from(".hero h1", { y: 40, opacity: 0, delay: 0.3 });
gsap.from(".hero p, .hero-btn", {
    y: 40,
    opacity: 0,
    delay: 0.6,
    stagger: 0.2
});

// SCROLL SECTIONS
gsap.utils.toArray(".section").forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%"
        },
        y: 60,
        opacity: 0,
        duration: 1
    });
});
// PROJECT TOWER RISE ON SCROLL
gsap.utils.toArray(".project-card").forEach(card => {
    gsap.fromTo(card,
        { y: 60, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
            }
        }
    );
});
// HERO PARALLAX EFFECT
window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    const scrollY = window.scrollY;

    hero.style.backgroundPositionY = `${scrollY * 0.3}px`;
});
// TECH PARTICLES
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particles = [];
const particleCount = 60;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 1;
        this.speedY = Math.random() * 0.5 + 0.2;
        this.opacity = Math.random() * 0.5 + 0.3;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
    }

    update() {
        this.y -= this.speedY;
        if (this.y < 0) {
            this.y = canvas.height;
            this.x = Math.random() * canvas.width;
        }
        this.draw();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => p.update());
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();
