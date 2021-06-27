// Name       : Sungwoo Yang
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

let currentScreen;
let alien1;
let alien2;
let boss;
let img1;
let healthbar;
let music;

function preload()
{
    music = loadSound( 'music/game.wav' );
}
function setup()
{
    createCanvas( 800, 600 );
    frameRate( fr );
    img1 = loadImage( 'image/space.jpg' );
    currentScreen = new CurrentScreen();
    alien1 = new Alien1();
    alien2 = new Alien2();
    boss = new Boss();
    healthbar = new HealthBar();
    music.loop();
}

function draw()
{
    background( img1 );
    currentScreen.draw();
}