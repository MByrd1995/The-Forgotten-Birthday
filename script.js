// ===========================
// The Forgotten Birthday
// Core Game Logic
// ===========================

// ---------- PARTICLES ----------
const particles = document.getElementById("particles");

function createParticles() {
    if (!particles) return;

    for (let i = 0; i < 80; i++) {
        const p = document.createElement("div");
        p.className = "particle";

        p.style.left = Math.random() * 100 + "vw";
        p.style.top = Math.random() * 100 + "vh";

        p.style.animationDuration = (6 + Math.random() * 8) + "s";
        p.style.animationDelay = Math.random() * 5 + "s";

        particles.appendChild(p);
    }
}

// ---------- TYPEWRITER ----------
function typeWriter(el, text, speed = 25) {
    if (!el) return;

    let i = 0;
    el.textContent = "";

    function type() {
        if (i < text.length) {
            el.textContent += text[i];
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// ---------- SCREEN SWITCH ----------
function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(s => {
        s.classList.add("hidden");
    });

    document.getElementById(screenId).classList.remove("hidden");
}

// ---------- GAME FLOW ----------
window.beginQuest = function () {
    showScreen("questScreen");
};

window.finishQuest = function () {
    showScreen("endingScreen");
};

// ---------- INIT ----------
window.addEventListener("load", () => {
    createParticles();

    const intro = document.getElementById("introText");

    typeWriter(
        intro,
`A strange energy fills the air...

A forgotten promise
still waits to be fulfilled.

Only one hero has been chosen.`
    );
});
