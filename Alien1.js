// Name       : Sungwoo Yang
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

class Alien1
{
    constructor()
    {
        this.x = width / 2;
        this.y = height / 3;
        this.width = 200;
        this.height = 200;

        this.img = loadImage( 'image/alien1.png' );
    }

    draw()
    {
        push();
        imageMode( CENTER );
        image( this.img, this.x, this.y, this.width, this.height );
        pop();
    }
}