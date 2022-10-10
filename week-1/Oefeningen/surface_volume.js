/*
Oefening gemaakt door Quinten Mahieu
Link naar oefening | https://www.pgm.gent/pgm-1/exercises/week_1.html#oppervlakte-en-volume
*/

// Variables
const l = 5;
const b = 2;
const h = 12;
const d = 5;

// Math
// Surface
const rectangle = l * b;
const triangle = (l * h) / 2;
const cirlce = (Math.pow(d, 2) * Math.PI) / 4;
// Volume
const cylinder = cirlce * h;
const cube = l * b * h;

// Console
console.log(`============================================================
Variables:
Lenght: ${l}cm
Width: ${b}cm
Height: ${h}cm
Diameter: ${d}cm
____________________________________________________________
Surfaces:
Rectangle: ${rectangle}cm
Triangle: ${triangle}cm
Circle: ${cirlce}cm
____________________________________________________________
Volumes:
Cylinder: ${cylinder}㎤
Cube: ${cube}㎤
============================================================`);
