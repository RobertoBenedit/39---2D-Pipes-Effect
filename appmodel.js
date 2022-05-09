const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let numberOfParticles = 200;
const particlesArray = [];
let hue = 125;
let saturation = 100;
let lightness = 50;

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
        ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.5)`;
        // ctx.fillStyle = "blue";
        ctx.fill();
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
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.5)`;
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    requestAnimationFrame(animate);
}
init();
animate();

// setInterval(() => {
// hue = Math.random() * 360;
// saturation = Math.random() * 100;
// lightness = Math.random() * 100;
// if (hue < 360) {
//     hue += 1;
// } else {
//     hue -= 1;
// }
// if (saturation < 100) {
//     saturation += 1;
// } else {
//     saturation -= 1;
// }
// if (lightness < 100) {
//     lightness += 1;
// } else {
//     lightness -= 1;
// }
// }, 500);
