// Name       : Sungwoo Yang
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

class Boss
{
    constructor()
    {
        this.x = width / 2;
        this.y = height / 3;
        this.dx = 5;
        this.width = 250;
        this.height = 150;
        this.img = loadImage( 'image/boss.png' );
    }

    update()
    {
        this.move();
    }

    move()
    {
        this.x += this.dx;
        if( this.x + this.width / 2 >= width )
        {
            this.dx = -this.dx;
        }
        else if( this.x - this.width / 2 <= 0 )
        {
            this.dx = -this.dx;
        }
    }

    draw()
    {
        push();
        imageMode( CENTER );
        image( this.img, this.x, this.y, this.width, this.height );
        pop();
    }
}