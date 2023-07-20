const canvas = document.getElementById('canvas1');
const ctx = canvas1.getContext("2d");

// Testa
ctx.beginPath();
ctx.arc(200, 150, 100, 0, Math.PI * 2);
ctx.fillStyle = '#FDBF00';
ctx.fill();
ctx.closePath();

// Orecchie
ctx.beginPath();
ctx.arc(125, 110, 30, 0, Math.PI * 2);
ctx.fillStyle = '#FDBF00';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(275, 110, 30, 0, Math.PI * 2);
ctx.fillStyle = '#FDBF00';
ctx.fill();
ctx.closePath();

// Occhi
ctx.beginPath();
ctx.arc(175, 125, 10, 0, Math.PI * 2);
ctx.fillStyle = 'black';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(225, 125, 10, 0, Math.PI * 2);
ctx.fillStyle = 'black';
ctx.fill();
ctx.closePath();

// Bocca
ctx.beginPath();
ctx.arc(200, 175, 40, 0, Math.PI, false);
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();

// Guance
ctx.beginPath();
ctx.arc(150, 170, 20, 0, Math.PI * 2);
ctx.fillStyle = '#FF0000';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(250, 170, 20, 0, Math.PI * 2);
ctx.fillStyle = '#FF0000';
ctx.fill();
ctx.closePath();