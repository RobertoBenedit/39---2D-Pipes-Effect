const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let numberOfParticles = 200;
const particlesArray = [];
let hue = 125;
let saturation = 100;
let lightness = 50;

// crea areas de color
const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop(0.2, "green");
gradient.addColorStop(0.4, "orange");
gradient.addColorStop(0.6, "red");
gradient.addColorStop(0.8, "purple");

const gradient2 = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient2.addColorStop(0.2, "black");
gradient2.addColorStop(0.4, "transparent");
gradient2.addColorStop(0.6, "white");

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 10 + 2;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.5)`;
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.strokeStyle = gradient2;
        ctx.stroke();
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.speedY = -this.speedY;
        }
        this.draw();
    }
}
// crea las particulas, llena el arreglo
function init() {
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}
// actualiza las particulas, llama a draw y update
function animate() {
    // para que sean solo particulas, este solo, sin los dos de abajo
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // para que deje estela, los dos que siguen sin el de arriba;
    // ctx.fillStyle = "rgba(255, 255, 255, 0.05";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    requestAnimationFrame(animate);
    // hue += 0.5;
}
init();
animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
